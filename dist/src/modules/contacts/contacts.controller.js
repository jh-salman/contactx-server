import { contactServices } from "./contacts.services";
import { getLocationFromIP } from "../../lib/ipGeolocation"; // Add this import
const saveContactController = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const { cardId } = req.params;
        let contactData = req.body; // Changed to let so we can modify it
        // 1️⃣ Auth check
        if (!userId) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        // 2️⃣ CardId check
        if (!cardId) {
            return res.status(400).json({ success: false, message: "Card ID is required" });
        }
        // 3️⃣ Empty body allowed
        if (!contactData || Object.keys(contactData).length === 0) {
            return res.status(200).json({
                success: true,
                message: "No data provided, nothing to save",
                data: null,
            });
        }
        // 4️⃣ Get IP address for location detection
        const ip = req.ip ||
            req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
            req.socket.remoteAddress ||
            '';
        // 5️⃣ Get location from IP if not provided in contactData
        if (ip && (!contactData.latitude || !contactData.city)) {
            const ipLocation = await getLocationFromIP(ip);
            if (ipLocation) {
                // Add location to contact data (prefer provided, fallback to IP)
                contactData = {
                    ...contactData,
                    latitude: contactData.latitude ?? ipLocation.latitude,
                    longitude: contactData.longitude ?? ipLocation.longitude,
                    city: contactData.city ?? ipLocation.city,
                    country: contactData.country ?? ipLocation.country,
                };
            }
        }
        // 6️⃣ Save contact with all prevents inside service
        const result = await contactServices.saveContact(userId, cardId, contactData);
        if (result.alreadySaved) {
            return res.status(200).json({
                success: true,
                message: "Contact already saved",
                data: result.contact,
            });
        }
        return res.status(201).json({
            success: true,
            message: "Contact saved successfully",
            data: result.contact,
        });
    }
    catch (error) {
        // 7️⃣ Prevent "headers already sent" error
        if (!res.headersSent) {
            return res.status(400).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
        // If headers already sent, just log error
        console.error("Unhandled error after response:", error);
    }
};
const getAllContactsController = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const contacts = await contactServices.getAllContacts(userId);
        // Check if headers already sent before responding
        if (!res.headersSent) {
            res.status(200).json({ success: true, data: contacts });
        }
    }
    catch (error) {
        // Only call next if headers haven't been sent
        if (!res.headersSent) {
            next(error);
        }
        else {
            console.error("Error after response sent:", error);
        }
    }
};
const updateContactController = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const { contactId } = req.params;
        let updateData = req.body; // Changed to let so we can modify it
        // Optional: Get location from IP if updating location fields
        const ip = req.ip ||
            req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
            req.socket.remoteAddress ||
            '';
        // If updating location and IP available, add location from IP
        if (ip && (!updateData.latitude || !updateData.city)) {
            const ipLocation = await getLocationFromIP(ip);
            if (ipLocation) {
                updateData = {
                    ...updateData,
                    latitude: updateData.latitude ?? ipLocation.latitude,
                    longitude: updateData.longitude ?? ipLocation.longitude,
                    city: updateData.city ?? ipLocation.city,
                    country: updateData.country ?? ipLocation.country,
                };
            }
        }
        const updated = await contactServices.updateContact(contactId, userId, updateData);
        res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            data: updated,
        });
    }
    catch (error) {
        if (!res.headersSent) {
            res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
};
const deleteContactController = async (req, res, next) => {
    try {
        const userId = req.user?.id;
        const { contactId } = req.params;
        const result = await contactServices.deleteContact(contactId, userId);
        return res.status(result.success ? 200 : 404).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const contactController = {
    saveContactController,
    getAllContactsController,
    updateContactController,
    deleteContactController
};
//# sourceMappingURL=contacts.controller.js.map
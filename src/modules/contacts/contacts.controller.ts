import { Request, Response } from "express";
import { contactServices } from "./contacts.services";


const saveContactController = async (req: Request, res: Response, next: any) => {
    try {
        const userId = req.user?.id as string | undefined;
        const { cardId } = req.params as { cardId?: string };
        const contactData = req.body;

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

        // 4️⃣ Save contact with all prevents inside service
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
    } catch (error: any) {
        // 5️⃣ Prevent "headers already sent" error
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
const getAllContactsController = async (req: Request, res: Response, next: any) => {
    try {
        const userId = req.user?.id as string;
        const contacts = await contactServices.getAllContacts(userId);
        res.status(200).json({ success: true, data: contacts });
    } catch (error: any) {
        next(error);
    }
};

const updateContactController = async (req: Request, res: Response, next: any) => {
    try {
        const userId = req.user?.id as string;
        const { contactId } = req.params;
        const updateData = req.body;

        const updated = await contactServices.updateContact(contactId, userId, updateData);

        res.status(200).json({
            success: true,
            message: "Contact updated successfully",
            data: updated,
        });
    } catch (error: any) {
        if (!res.headersSent) {
            res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
};


const deleteContactController = async (req: Request, res: Response, next: any) => {
    try {
        const userId = req.user?.id as string;
        const { contactId } = req.params as { contactId: string };

        const result = await contactServices.deleteContact(contactId, userId);

        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        next(error);
    }
};

export const contactController = { saveContactController, getAllContactsController, updateContactController, deleteContactController };

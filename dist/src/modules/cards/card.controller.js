import { cardServices } from "./card.services";
const createCard = async (req, res, next) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const userId = req.user?.id;
        const { cardTitle, cardColor, logo, profile, cover, imagesAndLayouts, isFavorite, personalInfo, socialLinks, } = req.body;
        const result = await cardServices.createCard(userId, cardTitle, cardColor, logo, profile, cover, imagesAndLayouts, isFavorite, personalInfo, socialLinks);
        res.status(201).json({
            success: true,
            message: "Card created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllCard = async (req, res) => {
    // Logic to get a card
    const userId = req.user?.id;
    const result = await cardServices.getAllCard(userId);
    res.status(200).json({
        success: true,
        message: "Card details",
        data: result
    });
};
const updateCard = async (req, res, next) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const { id } = req.params;
        const result = await cardServices.updateCard(id, req.user.id, req.body);
        res.status(200).json({
            success: true,
            message: "Card updated successfully",
            data: result,
        });
    }
    catch (error) {
        // prevent sending headers twice
        if (!res.headersSent) {
            res.status(400).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
        // also call next(error) if you have global error logging
        next(error);
    }
};
const deleteCard = async (req, res, next) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        const { id } = req.params;
        await cardServices.deleteCard(id, req.user.id);
        res.status(200).json({
            success: true,
            message: "Card deleted successfully",
        });
    }
    catch (error) {
        if (!res.headersSent) {
            res.status(400).json({
                success: false,
                message: error.message || "Something went wrong",
            });
        }
        next(error);
    }
};
export const cardController = {
    createCard,
    getAllCard,
    updateCard,
    deleteCard
};
//# sourceMappingURL=card.controller.js.map
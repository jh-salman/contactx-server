import { publicCardServices } from "./publicCard.services";
const getPublicCardController = async (req, res, next) => {
    try {
        const { id } = req.params; // expects /public/:id
        if (!id) {
            return res.status(400).json({ success: false, message: "Card ID is required" });
        }
        const card = await publicCardServices.getPublicCard(id);
        res.status(200).json({
            success: true,
            data: card,
        });
    }
    catch (error) {
        // forward the error to global error handler
        next(error);
    }
};
export const publicCardController = {
    getPublicCardController,
};
//# sourceMappingURL=publicCard.controller.js.map
import { prisma } from "../../lib/prisma";
const getPublicCard = async (cardId) => {
    const card = await prisma.card.findUnique({
        where: { id: cardId },
        include: {
            personalInfo: true,
            socialLinks: true,
        },
    });
    if (!card)
        throw new Error("Card not found");
    return card;
};
export const publicCardServices = {
    getPublicCard,
};
//# sourceMappingURL=publicCard.services.js.map
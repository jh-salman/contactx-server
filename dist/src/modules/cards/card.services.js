import { prisma } from "../../lib/prisma";
import { generateQRCode } from "../../lib/qr";
// import { Card } from "@prisma/client";
const createCard = async (userId, cardTitle, cardColor, logo, profile, cover, imagesAndLayouts, isFavorite, personalInfo, socialLinks) => {
    if (!userId)
        throw new Error("userId is required");
    // 1️⃣ Create the card first
    const card = await prisma.card.create({
        data: {
            userId,
            cardTitle: cardTitle ?? "ConactX",
            cardColor: cardColor ?? "black",
            logo: logo ?? null,
            profile: profile ?? null,
            cover: cover ?? null,
            qrCode: null,
            qrImage: null,
            imagesAndLayouts,
            isFavorite: isFavorite ?? false,
            ...(personalInfo && { personalInfo: { create: personalInfo } }),
            ...(socialLinks && socialLinks.length > 0
                ? { socialLinks: { create: { links: socialLinks.slice(0, 5) } } }
                : {}),
        },
    });
    // 2️⃣ Generate QR code pointing to the public card URL
    const { qrCode, qrImage } = await generateQRCode(card.id);
    // 3️⃣ Update card with QR info
    const updatedCard = await prisma.card.update({
        where: { id: card.id },
        data: { qrCode, qrImage },
        include: {
            personalInfo: true,
            socialLinks: true,
        },
    });
    return updatedCard;
};
// Get all card 
const getAllCard = async (userId) => {
    if (!userId) {
        throw new Error("userId is required");
    }
    const cards = await prisma.card.findMany({
        where: { userId },
        include: {
            personalInfo: true,
            socialLinks: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    // optional: return empty array instead of throwing
    if (!cards || cards.length === 0) {
        return []; // safer for frontend
    }
    return cards;
};
/// update signle card
const updateCard = async (cardId, userId, payload) => {
    if (!cardId || !userId) {
        throw new Error("cardId and userId are required");
    }
    // ownership check
    const existing = await prisma.card.findFirst({
        where: { id: cardId, userId },
    });
    if (!existing) {
        throw new Error("Card not found or unauthorized");
    }
    const updated = await prisma.card.update({
        where: { id: cardId },
        data: {
            ...(payload.cardTitle && { cardTitle: payload.cardTitle }),
            ...(payload.cardColor && { cardColor: payload.cardColor }),
            ...(payload.logo !== undefined && { logo: payload.logo }),
            ...(payload.profile !== undefined && { profile: payload.profile }),
            ...(payload.cover !== undefined && { cover: payload.cover }),
            ...(payload.imagesAndLayouts !== undefined && {
                imagesAndLayouts: payload.imagesAndLayouts,
            }),
            ...(payload.isFavorite !== undefined && {
                isFavorite: payload.isFavorite,
            }),
            ...(payload.personalInfo && {
                personalInfo: {
                    upsert: {
                        create: payload.personalInfo,
                        update: payload.personalInfo,
                    },
                },
            }),
            ...(payload.socialLinks && {
                socialLinks: {
                    upsert: {
                        create: {
                            links: payload.socialLinks.slice(0, 5),
                        },
                        update: {
                            links: payload.socialLinks.slice(0, 5),
                        },
                    },
                },
            }),
        },
        include: {
            personalInfo: true,
            socialLinks: true,
        },
    });
    return updated;
};
// delete card 
const deleteCard = async (cardId, userId) => {
    if (!cardId || !userId) {
        throw new Error("cardId and userId are required");
    }
    const existing = await prisma.card.findFirst({
        where: { id: cardId, userId },
    });
    if (!existing) {
        throw new Error("Card not found or unauthorized");
    }
    await prisma.card.delete({
        where: { id: cardId },
    });
    return true;
};
export const cardServices = {
    createCard,
    getAllCard,
    updateCard,
    deleteCard
};
//# sourceMappingURL=card.services.js.map
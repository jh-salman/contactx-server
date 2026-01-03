import { prisma } from "../../lib/prisma";

export const trackScanAndFetchCard = async (
    cardId: string,
    meta: {
        ip?: string;
        userAgent?: string;
        source?: "qr" | "link";
        latitude?: number;
        longitude?: number;
        city?: string;
        country?: string;
    }
) => {
    // 1️⃣ Scan track + location save
    await prisma.cardScan.create({
        data: {
            cardId,
            ip: meta.ip ?? null,
            userAgent: meta.userAgent ?? null,
            source: meta.source ?? "qr",
            latitude: meta.latitude ?? null,
            longitude: meta.longitude ?? null,
            city: meta.city ?? null,
            country: meta.country ?? null,
        },
    });

    // 2️⃣ Card fetch for modal
    const card = await prisma.card.findUnique({
        where: { id: cardId },
        include: {
            personalInfo: true,
            socialLinks: true,
            
            // logo: true,
            // banner: true,
        },
    });

    if (!card) throw new Error("Card not found");

    return card;
};

export const scanServices = {
    trackScanAndFetchCard,
};

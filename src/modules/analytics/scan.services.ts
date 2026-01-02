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
      ip: meta.ip,
      userAgent: meta.userAgent,
      source: meta.source ?? "qr",
      latitude: meta.latitude,
      longitude: meta.longitude,
      city: meta.city,
      country: meta.country,
    },
  });

  // 2️⃣ Card fetch
  const card = await prisma.card.findUnique({
    where: { id: cardId },
    include: {
      personalInfo: true,
      socialLinks: true,
    },
  });

  if (!card) {
    throw new Error("Card not found");
  }

  return card;
};

export const scanServices = {
  trackScanAndFetchCard,
};

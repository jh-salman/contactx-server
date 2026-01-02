import { prisma } from "../../lib/prisma";

export const trackScanAndFetchCard = async (
  cardId: string,
  meta: {
    ip?: string;
    userAgent?: string;
    source?: "qr" | "link";
  }
) => {
  // 1️⃣ Scan track করা
  await prisma.cardScan.create({
    data: {
      cardId,
      ip: meta.ip,
      userAgent: meta.userAgent,
      source: meta.source ?? "qr",
    },
  });

  // 2️⃣ Card fetch করা
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

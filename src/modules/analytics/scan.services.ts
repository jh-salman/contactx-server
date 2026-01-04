import { prisma } from "../../lib/prisma";
import { getLocationFromIP } from "../../lib/ipGeolocation"; // Add this import

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
  // 1️⃣ Guard: cardId required
  if (!cardId) {
    throw new Error("cardId is required");
  }

  // 2️⃣ Check card exists first
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

  // 3️⃣ Get location from IP if not provided and IP exists
  let finalMeta = { ...meta };
  
  if (meta.ip && (!meta.latitude || !meta.city)) {
    // Only fetch from IP if location not already provided
    const ipLocation = await getLocationFromIP(meta.ip);
    
    if (ipLocation) {
      // Use IP location if available, but prefer provided location
      finalMeta = {
        ...meta,
        latitude: meta.latitude ?? ipLocation.latitude,
        longitude: meta.longitude ?? ipLocation.longitude,
        city: meta.city ?? ipLocation.city,
        country: meta.country ?? ipLocation.country,
      };
    }
  }

  // 4️⃣ Track scan only if card exists
  await prisma.cardScan.create({
    data: {
      cardId: card.id,
      ip: finalMeta.ip ?? null,
      userAgent: finalMeta.userAgent ?? null,
      source: finalMeta.source ?? "qr",
      latitude: finalMeta.latitude ?? null,
      longitude: finalMeta.longitude ?? null,
      city: finalMeta.city ?? null,
      country: finalMeta.country ?? null,
    },
  });

  // 5️⃣ Return card for scan modal
  return card;
};

export const scanServices = {
  trackScanAndFetchCard,
};
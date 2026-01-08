import { prisma } from "../../lib/prisma";
import { getLocationFromIP } from "../../lib/ipGeolocation";

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
  if (!cardId) throw new Error("cardId is required");

  // 2️⃣ Fetch card
  const card = await prisma.card.findUnique({
    where: { id: cardId },
    include: {
      personalInfo: true,
      socialLinks: true,
    },
  });

  if (!card) throw new Error("Card not found");

  // 3️⃣ Resolve location (IP-based if not provided)
  let finalMeta = { ...meta };

  if (!meta.latitude || !meta.longitude || !meta.city) {
    if (meta.ip) {
      const ipLocation = await getLocationFromIP(meta.ip);
      if (ipLocation) {
        finalMeta.latitude = finalMeta.latitude ?? ipLocation.latitude;
        finalMeta.longitude = finalMeta.longitude ?? ipLocation.longitude;
        finalMeta.city = finalMeta.city ?? ipLocation.city;
        finalMeta.country = finalMeta.country ?? ipLocation.country;
      }
    }
  }

  // 4️⃣ Validate coordinates
  if (finalMeta.latitude && (finalMeta.latitude < -90 || finalMeta.latitude > 90))
    throw new Error("Invalid latitude");
  if (finalMeta.longitude && (finalMeta.longitude < -180 || finalMeta.longitude > 180))
    throw new Error("Invalid longitude");

  // 5️⃣ Create new scan (always create, allow multiple scans)
  const scan = await prisma.cardScan.create({
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

  // 6️⃣ Return card + scan info
  return {
    card,
    cardScan: {
      id: scan.id,
      scannedAt: scan.createdAt,
      ip: scan.ip,
      userAgent: scan.userAgent,
      source: scan.source,
      latitude: scan.latitude,
      longitude: scan.longitude,
      city: scan.city,
      country: scan.country,
    },
    message: "Scan tracked successfully",
  };
};

export const scanServices = {
  trackScanAndFetchCard,
};

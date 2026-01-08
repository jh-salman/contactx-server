import { Request, Response, NextFunction } from "express";
import { scanServices } from "./scan.services";

const trackScanController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cardId } = req.params;

    if (!cardId) {
      return res.status(400).json({ success: false, message: "Card ID is required" });
    }

    // 1️⃣ Get IP address (handle proxy/load balancer)
    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim() || // behind proxy
      req.socket.remoteAddress || // direct connection
      req.ip || // fallback
      null;

    // 2️⃣ Collect meta info
    const meta = {
      ip: ip ?? undefined,
      userAgent: req.headers["user-agent"]?.toString(),
      source: req.query.source === "link" ? "link" : "qr",
      latitude: req.query.latitude ? parseFloat(req.query.latitude as string) : undefined,
      longitude: req.query.longitude ? parseFloat(req.query.longitude as string) : undefined,
      city: req.query.city as string | undefined,
      country: req.query.country as string | undefined,
    } as {
      ip?: string;
      userAgent?: string;
      source?: "qr" | "link";
      latitude?: number;
      longitude?: number;
      city?: string;
      country?: string;
    };

    // 3️⃣ Track scan + fetch card
    const card = await scanServices.trackScanAndFetchCard(cardId, meta);

    // 4️⃣ Send response
    res.status(200).json({
      success: true,
      message: card.message || "Scan tracked successfully",
      data: card,
    });
  } catch (error: any) {
    console.error("Scan tracking error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const scanController = {
  trackScanController,
};

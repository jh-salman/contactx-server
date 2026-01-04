import { Request, Response } from "express";
import { scanServices } from "./scan.services";

const trackScanController = async (req: Request, res: Response, next: any) => {
  try {
    const { cardId } = req.params;

    if (!cardId) {
      return res.status(400).json({ success: false, message: "Card ID is required" });
    }

    // Get IP address (handle proxy/load balancer)
    const ip = req.ip || 
               (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
               req.socket.remoteAddress ||
               '';

    // Request meta info
    const meta = {
      ip: ip,
      userAgent: req.headers['user-agent'] || undefined,
      source: req.query.source === "link" ? "link" : "qr",
      // Extract location from query parameters if provided (optional)
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

    // Scan track + card fetch (location will be auto-detected from IP if not provided)
    const card = await scanServices.trackScanAndFetchCard(cardId, meta);

    res.status(200).json({
      success: true,
      message: "Scan tracked successfully",
      data: card,
    });
  } catch (error: any) {
    next(error);
  }
};

export const scanController = {
  trackScanController,
};
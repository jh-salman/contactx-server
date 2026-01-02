import { Request, Response } from "express";
import { scanServices } from "./scan.services";

const trackScanController = async (req: Request, res: Response, next: any) => {
  try {
    const { cardId } = req.params;

    if (!cardId) {
      return res.status(400).json({ success: false, message: "Card ID is required" });
    }

    // Request meta info
    const meta = {
      ip: req.ip || (req.headers['x-forwarded-for'] as string),
      userAgent: req.headers['user-agent'] || undefined,
      source: req.query.source === "link" ? "link" : "qr",
    };

    // Scan track + card fetch
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

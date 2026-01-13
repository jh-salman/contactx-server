import { Request, Response, NextFunction } from "express";
import { contactServices } from "./contacts.services";

// ✅ Step 2: Visitor saves Owner's contact (NO permission needed)
const saveContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Visitor's user ID
    const { cardId } = req.params as { cardId: string }; // Owner's card ID
    const data = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.saveContact(userId, cardId, data);

    res.status(200).json({
      success: true,
      message: result.alreadySaved ? "Contact already saved" : "Contact saved successfully",
      data: result.contact,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get all contacts
const getAllContactsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const contacts = await contactServices.getAllContacts(userId);

    res.status(200).json({ success: true, data: contacts });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update contact
const updateContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { contactId } = req.params;
    const data = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const updated = await contactServices.updateContact(contactId!, userId, data);

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: updated,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete contact
const deleteContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { contactId } = req.params;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.deleteContact(contactId!, userId);

    res.status(200).json({
      success: result.success,
      message: result.message,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Step 4: Visitor shares their contact with Owner
const shareVisitorContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Visitor's user ID
    const { ownerCardId, visitorCardId, scanLocation } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (!ownerCardId || !visitorCardId) {
      return res.status(400).json({ 
        success: false, 
        message: "ownerCardId and visitorCardId are required" 
      });
    }

    const result = await contactServices.shareVisitorContact(
      userId,
      ownerCardId,
      visitorCardId,
      scanLocation
    );

    res.status(200).json({
      success: true,
      message: "Contact share request sent to owner",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Step 5: Owner gets pending visitor shares
const getPendingVisitorSharesController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Owner's user ID

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const shares = await contactServices.getPendingVisitorShares(userId);

    res.status(200).json({
      success: true,
      data: shares,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Step 6: Owner approves visitor share
const approveVisitorShareController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Owner's user ID
    const { shareId } = req.params as { shareId: string };

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.approveVisitorShare(shareId, userId);

    res.status(200).json({
      success: true,
      message: "Visitor contact saved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Step 6: Owner rejects visitor share
const rejectVisitorShareController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // Owner's user ID
    const { shareId } = req.params as { shareId: string };

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.rejectVisitorShare(shareId, userId);

    res.status(200).json({
      success: true,
      message: "Visitor share rejected",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Optional: Owner requests Customer's contact permission
const requestContactPermissionController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { cardId } = req.params as { cardId: string };
    const { message } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.requestContactPermission(userId, cardId, message);

    res.status(200).json({
      success: true,
      message: "Contact request sent successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get received requests (Customer sees Owner's requests)
const getReceivedRequestsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const requests = await contactServices.getReceivedRequests(userId);

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get sent requests (Owner sees their requests)
const getSentRequestsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const requests = await contactServices.getSentRequests(userId);

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Approve request (Customer approves)
const approveRequestController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { requestId } = req.params as { requestId: string };

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.approveRequest(requestId, userId);

    res.status(200).json({
      success: true,
      message: "Request approved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Reject request (Customer rejects)
const rejectRequestController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { requestId } = req.params as { requestId: string };

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const result = await contactServices.rejectRequest(requestId, userId);

    res.status(200).json({
      success: true,
      message: "Request rejected",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const contactController = {
  saveContactController,
  getAllContactsController,
  updateContactController,
  deleteContactController,
  shareVisitorContactController,
  getPendingVisitorSharesController,
  approveVisitorShareController,
  rejectVisitorShareController,
  requestContactPermissionController,
  getReceivedRequestsController,
  getSentRequestsController,
  approveRequestController,
  rejectRequestController,
};
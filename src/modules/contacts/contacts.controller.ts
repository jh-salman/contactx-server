import { Request, Response, NextFunction } from "express";
import { contactServices } from "./contacts.services";
// import { contactServices } from "./contact.services";

// Save a contact
const saveContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id; // assume auth middleware sets req.user
    const { cardId } = req.params;
    const data = req.body;

    const result = await contactServices.saveContact(userId!, cardId!, data);

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

    const contacts = await contactServices.getAllContacts(userId!);

    res.status(200).json({ success: true, data: contacts });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update a contact
const updateContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { contactId } = req.params;
    const data = req.body;

    const updated = await contactServices.updateContact(contactId!, userId!, data);

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: updated,
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete a contact
const deleteContactController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const { contactId } = req.params;

    const result = await contactServices.deleteContact(contactId!, userId!);

    res.status(200).json({
      success: result.success,
      message: result.message,
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
};

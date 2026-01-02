import { Request, Response } from "express";
import { contactServices } from "./contacts.services";

// Save contact
const saveContactController = async (req: Request, res: Response, next: any) => {
  try {
    const userId = req.user?.id as string;
    const { cardId } = req.params as { cardId: string };
    const contactData = req.body

    const result = await contactServices.saveContact(userId, cardId, contactData);

    if (result.alreadySaved) {
      return res.status(200).json({
        success: true,
        message: "Contact already saved",
        data: result.contact,
      });
    }

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: result.contact,
    });
  } catch (error: any) {
    next(error);
  }
};

// Get all contacts
const getAllContactsController = async (req: Request, res: Response, next: any) => {
  try {
    const userId = req.user?.id as string;
    const contacts = await contactServices.getAllContacts(userId);

    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error: any) {
    next(error);
  }
};

// Update contact
const updateContactController = async (req: Request, res: Response, next: any) => {
  try {
    const userId = req.user?.id as string;
    const { contactId } = req.params as { contactId: string };
    const updateData = req.body;

    const updated = await contactServices.updateContact(contactId, userId, updateData);

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data: updated,
    });
  } catch (error: any) {
    next(error);
  }
};

// Delete contact
const deleteContactController = async (req: Request, res: Response, next: any) => {
  try {
    const userId = req.user?.id as string;
    const { contactId } = req.params as { contactId: string };

    await contactServices.deleteContact(contactId, userId);

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error: any) {
    next(error);
  }
};

export const contactController = {
  saveContactController,
  getAllContactsController,
  updateContactController,
  deleteContactController,
};

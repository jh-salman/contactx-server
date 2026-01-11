import { Request, Response } from "express";
import { cardServices } from "./card.services";




const createCard = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const userId = req.user?.id
    console.log(userId)
    const {
      cardTitle,
      cardColor,
      logo,
      profile,
      cover,
      imagesAndLayouts,
      isFavorite,
      personalInfo,
      socialLinks,
      
    } = req.body;


    const result = await cardServices.createCard(
      userId,
      cardTitle,
      cardColor,
      logo,
      profile,
      cover,
      imagesAndLayouts,
      isFavorite,
      personalInfo,
      socialLinks,
      
    );

    res.status(201).json({
      success: true,
      message: "Card created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCard = async (req: Request, res: Response) => {
  // Logic to get a card
  const userId = req.user?.id as string;
  const result = await cardServices.getAllCard(userId);
  res.status(200).json({
    success: true,
    message: "Card details",
    data: result
  });
};


const updateCard = async (req: Request, res: Response, next: any) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { id } = req.params as { id: string };

    const result = await cardServices.updateCard(id, req.user.id, req.body);

    res.status(200).json({
      success: true,
      message: "Card updated successfully",
      data: result,
    });
  } catch (error: any) {
    // prevent sending headers twice
    if (!res.headersSent) {
      res.status(400).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
    // also call next(error) if you have global error logging
    next(error);
  }
};



const deleteCard = async (req: Request, res: Response, next: any) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const { id } = req.params as { id: string };

    await cardServices.deleteCard(id, req.user.id);

    res.status(200).json({
      success: true,
      message: "Card deleted successfully",
    });
  } catch (error: any) {
    if (!res.headersSent) {
      res.status(400).json({
        success: false,
        message: error.message || "Something went wrong",
      });
    }
    next(error); 
  }
};


export const cardController = {
  createCard,
  getAllCard,
  updateCard,
  deleteCard
};
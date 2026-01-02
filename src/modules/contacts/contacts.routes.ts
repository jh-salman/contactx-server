import { Router } from "express";
import { contactController } from "./contacts.controller";

const router = Router();

// POST /contacts/save/:cardId
router.post("/save/:cardId", contactController.saveContactController);

// GET /contacts/all
router.get("/all", contactController.getAllContactsController);

// PUT /contacts/update/:contactId
router.put("/update/:contactId", contactController.updateContactController);

// DELETE /contacts/delete/:contactId
router.delete("/delete/:contactId", contactController.deleteContactController);

export const contactRoutes = router;

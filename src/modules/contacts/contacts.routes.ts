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

// Flow 2: Permission-based contact requests
// POST /contacts/request/:cardId - Request to save contact (Owner requests Customer's contact)
router.post("/request/:cardId", contactController.requestContactPermissionController);

// GET /contacts/requests/received - Get received requests (Customer sees Owner's requests)
router.get("/requests/received", contactController.getReceivedRequestsController);

// GET /contacts/requests/sent - Get sent requests (Owner sees their requests)
router.get("/requests/sent", contactController.getSentRequestsController);

// POST /contacts/requests/:requestId/approve - Approve request (Customer approves)
router.post("/requests/:requestId/approve", contactController.approveRequestController);

// POST /contacts/requests/:requestId/reject - Reject request (Customer rejects)
router.post("/requests/:requestId/reject", contactController.rejectRequestController);

export const contactRoutes = router;

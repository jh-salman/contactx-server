import { Router } from "express";
import { contactController } from "./contacts.controller";

const router = Router();

// ✅ Step 2: Visitor saves Owner's contact (NO permission needed)
router.post("/save/:cardId", contactController.saveContactController);

// Existing contact CRUD routes
router.get("/all", contactController.getAllContactsController);
router.put("/update/:contactId", contactController.updateContactController);
router.delete("/delete/:contactId", contactController.deleteContactController);

// ✅ Step 4: Visitor shares their contact with Owner
router.post("/visitor/share-contact", contactController.shareVisitorContactController);

// ✅ Step 5: Owner gets pending visitor shares
router.get("/visitor/pending-shares", contactController.getPendingVisitorSharesController);

// ✅ Step 6: Owner approves/rejects visitor share
router.post("/visitor/approve-share/:shareId", contactController.approveVisitorShareController);
router.post("/visitor/reject-share/:shareId", contactController.rejectVisitorShareController);

// Optional: Contact request routes (Owner requests Customer's contact)
router.post("/request/:cardId", contactController.requestContactPermissionController);
router.get("/requests/received", contactController.getReceivedRequestsController);
router.get("/requests/sent", contactController.getSentRequestsController);
router.post("/requests/:requestId/approve", contactController.approveRequestController);
router.post("/requests/:requestId/reject", contactController.rejectRequestController);

export const contactRoutes = router;
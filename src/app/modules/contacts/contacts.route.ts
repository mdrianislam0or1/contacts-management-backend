import express from "express";
import { ContactsController } from "./contacts.controller";
import validateRequest from "../../middleware/validateRequest";
import { contactValidationSchema } from "./contacts.validation";

const router = express.Router();

router.post(
  "/add-contact",
  validateRequest(contactValidationSchema),
  ContactsController.AddContactController
);

router.get("/get-contacts", ContactsController.getAllContactsController);

router.put(
  "/update-contact/:id",
  validateRequest(contactValidationSchema),
  ContactsController.updateContactController
);

router.delete(
  "/delete-contact/:id",
  ContactsController.deleteContactController
);

router.post("/delete-contacts", ContactsController.deleteContactsController);
export const ContactsRouter = router;

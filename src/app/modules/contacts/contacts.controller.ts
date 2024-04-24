import { Request, Response } from "express";
import { ContactsService } from "./contacts.service";
import { Contact } from "./contacts.interface";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const AddContactController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactsData: Contact = req.body;

    const newContact = await ContactsService.AddContact(contactsData);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Contact added successfully",
      data: newContact,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 500,
      success: false,
      errorMessage: error.message,
      errorDetails: error,
    });
  }
};

export const getAllContactsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await ContactsService.getAllContacts();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      errorMessage: error.message,
      errorDetails: error,
    });
  }
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactId = req.params.id;
    const contactData = req.body;
    const updatedContact = await ContactsService.updateContact(
      contactId,
      contactData
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contact updated successfully",
      data: updatedContact,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      errorMessage: error.message,
      errorDetails: error,
    });
  }
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactId = req.params.id;
    await ContactsService.deleteContact(contactId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      errorMessage: error.message,
      errorDetails: error,
    });
  }
};

const deleteContactsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactIds: string[] = req.body.contactIds;
    await ContactsService.deleteContacts(contactIds);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Contacts deleted successfully",
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      errorMessage: error.message,
      errorDetails: error,
    });
  }
};

export const ContactsController = {
  AddContactController,
  getAllContactsController,
  updateContactController,
  deleteContactController,
  deleteContactsController,
};

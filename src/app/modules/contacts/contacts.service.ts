import { Contact } from "./contacts.interface";
import contactsModel from "./contacts.model";

const AddContact = async (contact: Contact): Promise<Contact> => {
  return await contactsModel.create(contact);
};

const getAllContacts = async (): Promise<Contact[]> => {
  return await contactsModel.find();
};

const updateContact = async (
  contactId: string,
  updateContact: Contact
): Promise<Contact | null> => {
  return contactsModel.findByIdAndUpdate(contactId, updateContact, {
    new: true,
  });
};

const getSingleContact = async (contactId: string): Promise<Contact | null> => {
  return await contactsModel.findById(contactId);
};

const deleteContact = async (contactId: string): Promise<Contact | null> => {
  await contactsModel.findByIdAndDelete(contactId);
  return null;
};

const markFavorite = async (
  contactId: string,
  isFavorite: boolean
): Promise<Contact | null> => {
  try {
    const updatedContact = await contactsModel.findByIdAndUpdate(
      contactId,
      { $set: { isFavorite } },
      { new: true }
    );
    return updatedContact;
  } catch (error) {
    throw new Error("Failed to mark contact as favorite");
  }
};

const getFavoriteContacts = async (): Promise<Contact[]> => {
  return await contactsModel.find({ isFavorite: true });
};

export const ContactsService = {
  AddContact,
  getAllContacts,
  updateContact,
  getSingleContact,
  deleteContact,
  markFavorite,
  getFavoriteContacts,
};

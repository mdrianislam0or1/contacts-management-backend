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

const deleteContact = async (contactId: string): Promise<Contact | null> => {
  await contactsModel.findByIdAndDelete(contactId);
  return null;
};

const deleteContacts = async (contactIds: string[]): Promise<void> => {
  await contactsModel.deleteMany({ _id: { $in: contactIds } });
};

export const ContactsService = {
  AddContact,
  getAllContacts,
  updateContact,
  deleteContact,
  deleteContacts,
};

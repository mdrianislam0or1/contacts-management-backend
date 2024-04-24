import mongoose, { Schema, Document } from "mongoose";
import { Contact } from "./contacts.interface";

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profilePicture: { type: String, required: true },
});

export default mongoose.model<Contact>("Contact", ContactSchema);

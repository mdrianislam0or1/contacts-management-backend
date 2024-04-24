import { object, string, optional } from "zod";

export const contactValidationSchema = object({
  name: string(),
  email: optional(string()),
  phoneNumber: string(),
  address: string(),
  profilePicture: string(),
});

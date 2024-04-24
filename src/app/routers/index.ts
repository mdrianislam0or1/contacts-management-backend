import { Router } from "express";
import { ContactsRouter } from "../modules/contacts/contacts.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/api",
    route: ContactsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

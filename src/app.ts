import { Application } from "express";
import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to contacts-management-backend API",
  });
});

export default app;

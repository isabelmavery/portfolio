// routes/index.ts
import { Application } from "express";
import { userRoutes } from "./user";

export default function routes(app: Application) {
  userRoutes(app);
}

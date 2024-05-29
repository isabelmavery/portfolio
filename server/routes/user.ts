import { Application } from "express";
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
} from "../user/db-access";
import { loginUser, registerUser } from "../user/register-api";
import { constants } from "http2";

export const userRoutes = (app: Application) => {
  app.get("/users", async (_, res) => {
    try {
      const users = await getUsers();
      res.send(users);
    } catch (error) {
      res.send(error);
    }
  });

  app.get("/users/:id", async (req, res) => {
    try {
      const user = await getUserById(req.params.id);
      res.send(user);
    } catch (error) {
      res.send(error);
    }
  });

  /** Creates a user without registering, for admin only, will likely delete soon */
  app.post("/users", async (req, res) => {
    try {
      const newUser = await createUser(req.body);
      res.send(newUser);
    } catch (error) {
      console.log("error", error);
      res.send(error);
    }
  });

  app.post("/users/register", async (req, res) => {
    try {
      console.log("req", req.body);
      const registeredUser = await registerUser(req.body);
      res.send(registeredUser);
    } catch (error) {
      console.log("error", error);
      res.status(constants.HTTP_STATUS_BAD_REQUEST);
      res.send(error);
    }
  });

  app.post("/users/login", async (req, res) => {
    try {
      const loggedInUser = await loginUser(req.body);
      res.send(loggedInUser);
    } catch (error) {
      console.log("error", error);
      res.status(constants.HTTP_STATUS_BAD_REQUEST);
      res.send(error);
    }
  });

  app.put("/users/:id", async (req, res) => {
    try {
      const user = await updateUser(req.params.id, req.body);
      res.send(user);
    } catch (error) {
      console.log("error", error);
      res.send(error);
    }
  });
};

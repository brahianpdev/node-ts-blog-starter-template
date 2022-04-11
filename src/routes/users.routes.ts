import { Router } from "express";
const routes = Router();

import usersController from "../controllers/users.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import validationMiddleware from '../middlewares/validation.middleware';
import { UpdateUserDTO } from "../types/dtos/update-user.dto";

routes
  .get("/", usersController.getAllUsers)
  .get("/:email", authMiddleware, usersController.findUserByEmail)
  .get("/:id", usersController.findUserById)
  .put("/:id", authMiddleware, validationMiddleware(UpdateUserDTO), usersController.updateUser)
  .delete("/:id", authMiddleware, usersController.deleteUser);

export default routes;

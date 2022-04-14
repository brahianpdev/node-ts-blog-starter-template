import { Router } from "express";
const routes = Router();

import usersController from "../controllers/users.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import { isAdminMiddelware } from "../middlewares/isAdminMiddelware";
import validationMiddleware from "../middlewares/validation.middleware";
import { UpdateUserDTO } from "../types/dtos/update-user.dto";

routes
  .get("/", usersController.getAllUsers)
  .get(
    "/email/:email",
    authMiddleware,
    isAdminMiddelware,
    usersController.findUserByEmail
  )
  .get("/:id", usersController.findUserById)

  .put(
    "/update/:id",
    authMiddleware,
    validationMiddleware(UpdateUserDTO),
    usersController.updateUser
  )

  .delete(
    "/delete/:id",
    authMiddleware,
    isAdminMiddelware,
    usersController.deleteUser
  );

export default routes;

import { Router } from "express";
const routes = Router();

import usersController from "../controllers/users.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import { isAdminMiddelware } from "../middlewares/isAdminMiddelware";
import validationMiddleware from "../middlewares/validation.middleware";
import { UpdateUserDTO } from "../types/dtos/update-user.dto";
import upload from "../configuration/multerConfig";

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

  .post(
    "/upload/:id",
    authMiddleware,
    upload.single("file"),
    usersController.uploadAvatar
  )

  .delete(
    "/delete/:id",
    authMiddleware,
    isAdminMiddelware,
    usersController.deleteUser
  );

export default routes;

import { Router } from "express";
const routes = Router();

import postsController from "../controllers/posts.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import { isAdminMiddelware } from "../middlewares/isAdminMiddelware";
import validationMiddleware from "../middlewares/validation.middleware";
import { CreatePostDTO } from "../types/dtos/create-post.dto";
import { UpdatePostDTO } from "../types/dtos/update-post.dto";
import { ChangeStateDTO } from "../types/dtos/change-state.dto";

routes
  .get("/", postsController.findAll)
  .get("/:id", postsController.findById)

  .post(
    "/create/",
    authMiddleware,
    validationMiddleware(CreatePostDTO, true),
    postsController.create
  )

  .post(
    "/remove/:id",
    authMiddleware,
    validationMiddleware(ChangeStateDTO),
    postsController.remove
  )

  .post(
    "/publish/:id",
    authMiddleware,
    validationMiddleware(ChangeStateDTO),
    postsController.publish
  )

  .put(
    "/update/:id",
    authMiddleware,
    validationMiddleware(UpdatePostDTO),
    postsController.update
  )

  .delete(
    "/delete/:id",
    authMiddleware,
    isAdminMiddelware,
    postsController.delete
  );

export default routes;

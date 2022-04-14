import { Router } from "express";
const routes = Router();

import commentsController from "../controllers/comments.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import { isAdminMiddelware } from "../middlewares/isAdminMiddelware";
import validationMiddleware from "../middlewares/validation.middleware";
import { CreateCommentDTO } from "../types/dtos/create-comment.dto";
import { UpdateCommentDTO } from "../types/dtos/update-comment.dto";

routes
  .get("/", authMiddleware, commentsController.findAll)

  .post(
    "/create/",
    authMiddleware,
    validationMiddleware(CreateCommentDTO),
    commentsController.create
  )

  .put(
    "/update/:id",
    authMiddleware,
    isAdminMiddelware,
    validationMiddleware(UpdateCommentDTO),
    commentsController.update
  )

  .delete(
    "/delete/:id",
    authMiddleware,
    isAdminMiddelware,
    commentsController.delete
  );

export default routes;

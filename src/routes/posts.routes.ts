import { Router } from "express";
const routes = Router();

import postsController from "../controllers/posts.controller";
import authMiddleware from '../middlewares/authentication.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import { CreatePostDTO } from '../types/dtos/create-post.dto';
import { UpdatePostDTO } from '../types/dtos/update-post.dto'

routes
  .get("/", postsController.findAll)
  .get("/:id", postsController.findById)
  .post("/", authMiddleware, validationMiddleware(CreatePostDTO, true), postsController.create)
  .put("/:id", authMiddleware, validationMiddleware(UpdatePostDTO), postsController.update)
  .delete("/:id", authMiddleware, postsController.delete);

export default routes;

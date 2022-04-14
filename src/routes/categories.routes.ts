import { Router } from "express";
const routes = Router();

import categoriesController from "../controllers/categories.controller";
import authMiddleware from "../middlewares/authentication.middleware";
import { isAdminMiddelware } from "../middlewares/isAdminMiddelware";
import validationMiddleware from "../middlewares/validation.middleware";
import { CreateCategoryDTO } from "../types/dtos/create-category.dto";
import { UpdateCategoryDTO } from "../types/dtos/update-category.dto";

routes
  .get("/", authMiddleware, categoriesController.findAll)

  .post(
    "/create/",
    authMiddleware,
    isAdminMiddelware,
    validationMiddleware(CreateCategoryDTO),
    categoriesController.create
  )

  .put(
    "/update/:id",
    authMiddleware,
    isAdminMiddelware,
    validationMiddleware(UpdateCategoryDTO),
    categoriesController.update
  )

  .delete(
    "/delete/:id",
    authMiddleware,
    isAdminMiddelware,
    categoriesController.delete
  );

export default routes;

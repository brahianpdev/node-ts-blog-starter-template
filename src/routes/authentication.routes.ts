import { Router } from "express";
const routes = Router();

import authenticationController from "../controllers/authentication.controller";
import validationMiddleware from '../middlewares/validation.middleware';
import { RegisterDTO } from '../types/dtos/register.dto';
import { LogInDto } from '../types/dtos/logIn.dto';


routes
  .post("/register", validationMiddleware(RegisterDTO), authenticationController.register)
  .post("/verify/:userId/:token", authenticationController.verifyAccount)
  .post("/login", validationMiddleware(LogInDto), authenticationController.login)
  .post("/logout", authenticationController.logout);

export default routes;

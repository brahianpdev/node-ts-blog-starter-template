import { Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import enviromentConfig from "../configuration/enviromentConfig";

import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";
import WrongAuthenticationTokenException from "./wrongAuthenticationTokenException";
import DataStoredInToken from "types/interfaces/dataStoredInToken.interface";
import RequestWithUser from "types/interfaces/requestWithUser.interface";
import User from "../models/user.model";

async function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
  const cookies = req.cookies;

  if (cookies && cookies.Authorization) {
    const secret = enviromentConfig.jwt.secret;

    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await User.findById(id);
      
      if (user) {
        req.user = user;
        next();
      } else {
        next(new WrongAuthenticationTokenException());
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException());
    }
  } else {
    next(new AuthenticationTokenMissingException());
  }
}

export default authMiddleware;

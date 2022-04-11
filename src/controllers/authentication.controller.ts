import { Request, response, Response } from "express";

import { AuthenticationService } from "../services/authentication.service";
import { RegisterDTO } from "../types/dtos/register.dto";
import { LogInDto } from "types/dtos/logIn.dto";

class AuthenticationController {
  async register(req: Request, res: Response) {
    const userData: RegisterDTO = req.body;

    try {
      const { cookie, user } = await new AuthenticationService().register({
        ...userData,
      });

      res.setHeader("Set-Cookie", [cookie]);
      return res.json({
        message: "User registered successfully, please confirm your email",
        user, 
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(req: Request, res: Response) {
    const loginDTO: LogInDto = req.body;

    try {
      const { cookie, user } = await new AuthenticationService().login({
        ...loginDTO,
      });

      res.setHeader("Set-Cookie", [cookie]);
      return res.json({
        message: "User logged in successfully",
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async logout(req: Request, res: Response) {
    res.setHeader("Set-Cookie", ["Authorization=;Max-age=0"]);
    return res.json({
      message: "User logged out successfully",
    });
  }

  async verifyAccount(req: Request, res: Response) {
    const { userId, token } = req.params;

    try {
      const user = await new AuthenticationService().verifyAccount(userId, token);

      return res.json({
        message: "User verified successfully",
        user,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new AuthenticationController();

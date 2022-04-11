import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import enviromentConfig from "../configuration/enviromentConfig";

import { UsersService } from "./users.service";
import { RegisterDTO } from "../types/dtos/register.dto";
import DataStoredInToken from "types/interfaces/dataStoredInToken.interface";
import TokenData from "../types/interfaces/tokenData.interface";
import { LogInDto } from "types/dtos/logIn.dto";
import { NodemailerService } from "./nodemailer.service";
import User from "types/interfaces/user.interface";
import Token from "../models/token.model";

export class AuthenticationService {
  async register(registerDTO: RegisterDTO) {
    if (await new UsersService().findUserByEmail(registerDTO.email)) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(registerDTO.password, 10);
    const user = await new UsersService().createUser({
      ...registerDTO,
      password: hashedPassword,
    });

    user.password = undefined;

    const tokenData = await this.generateJwt({ ...user });
    const cookie = await this.createCookie(tokenData);

    const token = await new Token({
      userId: user._id,
      token:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    });

    token.save();

    const message = `${enviromentConfig.app.url}/verify/${user._id}/${token.token}`;
    await new NodemailerService().sendEmail(
      user.email,
      "Verify Email",
      message
    );

    return { user, cookie };
  }

  async generateJwt(user: User): Promise<TokenData> {
    const expiresIn = 60 * 60;
    const secret = enviromentConfig.jwt.secret;
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }

  async createCookie(tokenData: TokenData) {
    const cookie = `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
    return cookie;
  }

  async findByEmail(email: string): Promise<User> {
    return await new UsersService().findUserByEmail(email);
  }

  async login(loginDTO: LogInDto) {
    const user = await this.findByEmail(loginDTO.email);

    if (user) {
      if (!user.isEmailConfirmed) {
        throw new Error("User email is not confirmed");
      }

      const isPasswordMatching = await bcrypt.compare(
        loginDTO.password,
        user.password
      );

      if (isPasswordMatching) {
        const tokenData = await this.generateJwt(user);
        const cookie = await this.createCookie(tokenData);
        return { user, cookie };
      } else {
        throw new Error("Wrong credentials");
      }
    } else {
      throw new Error("Wrong credentials");
    }
  }

  async verifyAccount(userId: string, token: string) {
    const user = await new UsersService().findUserById(userId);

    if (user) {
      const tokenFromDb = await Token.findOne({ userId, token });

      if (tokenFromDb) {
        user.isEmailConfirmed = true;
        await user.save();

        const message = `Your account is confirmed`;

        await new NodemailerService().sendEmail(
          user.email,
          "Verify Email",
          message
        );

        user.password = undefined;
        return user;
      } else {
        throw new Error("Invalid token");
      }
    } else {
      throw new Error("User not found");
    }
  }
}

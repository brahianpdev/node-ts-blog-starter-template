import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

class UsersController {
  async getAllUsers(req: Request, res: Response) {
    const users = await new UsersService().getAllUsers();

    res.json({
      message: "Users obtained successfully",
      users,
    });
  }

  async findUserByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const user = await new UsersService().findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User found",
      user,
    });
  }

  async findUserById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await new UsersService().findUserById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User found",
      user,
    });
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { email, password, passwordConfirm } = req.body;

    const user = await new UsersService().updateUser(id, {
      email,
      password,
      passwordConfirm,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User updated",
      user,
    });
  }

  async uploadAvatar(req: Request, res: Response) {
    const avatar = req.file;
    const id = req.params.id;

    if (!avatar) {
      return res.status(400).json({
        message: "Please upload an avatar",
      });
    }

    await new UsersService().uploadAvatar(id, avatar.path);

    return res.json({
      message: "Profile picture updated",
      file: avatar,
    });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await new UsersService().deleteUser(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User deleted",
      user,
    });
  }
}

export default new UsersController();

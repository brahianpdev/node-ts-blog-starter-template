import { UpdateUserDTO } from "../types/dtos/update-user.dto";
import { RegisterDTO } from "../types/dtos/register.dto";
import User from "../models/user.model";

export class UsersService {
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserByEmail(email: string) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserById(id: string) {
    try {
      return await User.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(registerDTO: RegisterDTO) {
    try {
      const user = new User(registerDTO);
      const userExist = await this.findUserByEmail(registerDTO.email);

      if (userExist) {
        throw new Error("User already exist");
      }

      return user.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(id: string, updateUserDTO: UpdateUserDTO) {
    try {
      return await User.findByIdAndUpdate(id, updateUserDTO);
    } catch (error) {
      throw new Error(error);
    }
  }

  async verifyEmail(id: string) {
    try {
      return await User.findByIdAndUpdate(id, {
        isEmailConfirmed: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(id: string) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

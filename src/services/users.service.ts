import { UpdateUserDTO } from "../types/dtos/update-user.dto";
import { RegisterDTO } from "../types/dtos/register.dto";
import User from "../models/user.model";

export class UsersService {
  async getAllUsers() {
    return await User.find();
  }

  async findUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async findUserById(id: string) {
    return await User.findById(id);
  }

  async createUser(registerDTO: RegisterDTO) {
    const user = new User(registerDTO);
    const userExist = await this.findUserByEmail(registerDTO.email);

    if (userExist) {
      throw new Error("User already exist");
    }

    return user.save();
  }

  async updateUser(id: string, updateUserDTO: UpdateUserDTO) {
    return await User.findByIdAndUpdate(id, updateUserDTO);
  }

  async verifyEmail(id: string) {
    return await User.findByIdAndUpdate(id, {
      isEmailConfirmed: true,
    });
  }

  async deleteUser(id: string) {
    return await User.findByIdAndDelete(id);
  }
}

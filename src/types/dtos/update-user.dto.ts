import { IsString } from "class-validator";

export class UpdateUserDTO {
  @IsString()
  email?: string;

  @IsString()
  password?: string;
}

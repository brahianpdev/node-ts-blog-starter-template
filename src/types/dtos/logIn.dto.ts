import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LogInDto {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public password: string;
}

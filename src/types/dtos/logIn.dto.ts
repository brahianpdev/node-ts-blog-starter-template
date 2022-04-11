import { IsString } from "class-validator";

export class LogInDto {
  @IsString()
  public email: string;

  public isEmailConfirmed: boolean;

  @IsString()
  public password: string;
}

import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdatePostDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(12)
  @MaxLength(20)
  title?: string;

  @IsNotEmpty()
  @IsString()
  image?: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(120)
  @MaxLength(1600)
  content?: string;

  state?: boolean;

}

import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCommentDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(120)
  content: string;
  state: boolean;
}

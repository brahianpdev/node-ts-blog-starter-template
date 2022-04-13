import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  title?: string;
  status?: boolean;
}

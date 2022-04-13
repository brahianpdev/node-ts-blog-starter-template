import { IsString } from "class-validator";

export class UpdatePostDTO {
  @IsString()
  title?: string;

  state?: boolean;

  @IsString()
  content?: string;
}

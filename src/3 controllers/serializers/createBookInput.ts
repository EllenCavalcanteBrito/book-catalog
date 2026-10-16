import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookInput {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsNumber()
  pages!: number;
}
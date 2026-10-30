import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PutBookInput {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  author!: string;

  @IsNumber()
  pages!: number;
}

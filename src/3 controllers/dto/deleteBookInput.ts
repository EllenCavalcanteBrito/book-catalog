import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteBookInput {
  @IsString()
  @IsNotEmpty()
  id!: string;
}

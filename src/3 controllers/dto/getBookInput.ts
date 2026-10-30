import { IsNotEmpty, IsString } from 'class-validator';

export class GetBookInput {
  @IsString()
  @IsNotEmpty()
  id!: string;
}

import { Service } from 'typedi';
import { CreateBookInput } from '../3 controllers/dto/createBookInput.js';
import { CreateBookOutput } from '../3 controllers/dto/createBookOutput.js';

@Service()
export class CreateBookUseCase {
  
  async execute(input: CreateBookInput): Promise<CreateBookOutput> {
    return { id: '12345-uuid-gerado' };
  }
}
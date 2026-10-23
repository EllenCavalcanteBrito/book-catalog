import { Service } from 'typedi';
import { CreateBookInput } from '../3 controllers/dto/createBookInput.js';
import { CreateBookOutput } from '../3 controllers/dto/createBookOutput.js';
import { BookRepository } from '../4 framework/repositories/BookRepository.js';

@Service()
export class CreateBookUseCase {

  constructor(private readonly bookRepository: BookRepository) {}
  
  async execute(input: CreateBookInput): Promise<CreateBookOutput> {
    const result = await this.bookRepository.create(input.title, input.author, input.pages);
    return result;
  }
}
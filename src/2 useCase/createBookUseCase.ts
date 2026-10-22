import { Service } from 'typedi';
import { CreateBookInput } from '../3 controllers/dto/createBookInput.js';
import { CreateBookOutput } from '../3 controllers/dto/createBookOutput.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';

@Service()
export class CreateBookUseCase {

  constructor(private readonly bookRepository: IBookRepository) {}
  
  async execute(input: CreateBookInput): Promise<CreateBookOutput> {
    const result = await this.bookRepository.create(input.title, input.author, input.pages);
    return result;
  }
}
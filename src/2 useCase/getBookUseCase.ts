import { Service } from 'typedi';
import { GetBookInput } from '../3 controllers/dto/getBookInput.js';
import { GetBookOutput } from '../3 controllers/dto/getBookOutput.js';
import { BookRepository } from '../4 framework/repositories/BookRepository.js';

@Service()
export class GetBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(input: GetBookInput): Promise<GetBookOutput> {
    const book = await this.bookRepository.findById(input.id);

    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }
}

import { Service } from 'typedi';
import { DeleteBookInput } from '../3 controllers/dto/deleteBookInput.js';
import { BookRepository } from '../4 framework/repositories/BookRepository.js';

@Service()
export class DeleteBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(input: DeleteBookInput): Promise<void> {
    const book = await this.bookRepository.findById(input.id);

    if (!book) {
      throw new Error('Book not found');
    }

    await this.bookRepository.delete(input.id);
  }
}

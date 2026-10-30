import { Service } from 'typedi';
import { Book } from '../1 domain/entities/Book.js';
import { PutBookInput } from '../3 controllers/dto/putBookInput.js';
import { BookRepository } from '../4 framework/repositories/BookRepository.js';

@Service()
export class PutBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(input: PutBookInput): Promise<Book> {
    const updatedBook = await this.bookRepository.update({
      id: input.id,
      title: input.title,
      author: input.author,
      pages: input.pages,
    });

    if (!updatedBook) {
      throw new Error('Book not found');
    }

    return updatedBook;
  }
}

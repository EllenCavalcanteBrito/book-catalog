import { Service } from 'typedi';
import { DeleteBookInput } from '../3 controllers/dto/deleteBookInput.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';

@Service()
export class DeleteBookUseCase {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(input: DeleteBookInput): Promise<void> {
    const book = await this.bookRepository.findById(input.id);

    if (!book) {
      throw new Error('Book not found');
    }

    await this.bookRepository.delete(input.id);
  }
}

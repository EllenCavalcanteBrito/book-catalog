import { Inject, Service } from 'typedi';
import { Book } from '../1 domain/entities/Book.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';
import { PutBookInput } from '../3 controllers/dto/putBookInput.js';

@Service()
export class PutBookUseCase {
  constructor(
    @Inject('DynamoBookRepositoryToken')
    private readonly dynamoBookRepository: IBookRepository
  ) {}

  async execute(input: PutBookInput): Promise<Book> {
    const updatedBook = await this.dynamoBookRepository.update({
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

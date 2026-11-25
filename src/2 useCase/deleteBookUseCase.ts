import { Inject, Service } from 'typedi';
import { DeleteBookInput } from '../3 controllers/dto/deleteBookInput.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';

@Service()
export class DeleteBookUseCase {
  constructor(
    @Inject('DynamoBookRepositoryToken')
    private readonly dynamoBookRepository: IBookRepository
  ) {}

  async execute(input: DeleteBookInput): Promise<void> {
    const book = await this.dynamoBookRepository.findById(input.id);

    if (!book) {
      throw new Error('Book not found');
    }

    await this.dynamoBookRepository.delete(input.id);
  }
}

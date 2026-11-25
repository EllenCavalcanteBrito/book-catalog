import { Inject, Service } from 'typedi';
import { GetBookInput } from '../3 controllers/dto/getBookInput.js';
import { GetBookOutput } from '../3 controllers/dto/getBookOutput.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';

@Service()
export class GetBookUseCase {
  constructor(
    @Inject('DynamoBookRepositoryToken')
    private readonly dynamoBookRepository: IBookRepository
  ) {}

  async execute(input: GetBookInput): Promise<GetBookOutput> {
    const book = await this.dynamoBookRepository.findById(input.id);

    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }
}

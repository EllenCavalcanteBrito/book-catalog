import { Inject, Service } from 'typedi';
import { GetBooksOutput } from '../3 controllers/dto/getBooksOutput.js';
import { IBookRepository } from '../1 domain/interface/IBookRepository.js';

@Service()
export class GetBooksUseCase {
  constructor(
    @Inject('BookRepositoryToken') private readonly bookRepository: IBookRepository
  ) {}

  async execute(): Promise<GetBooksOutput> {
    return await this.bookRepository.findAll();
  }
}

import { Service } from 'typedi';
import { GetBooksOutput } from './dto/getBooksOutput.js';
import { GetBooksUseCase } from '../2 useCase/getBooksUseCase.js';


@Service()
export class GetBooksController {
  constructor(private getBooksUseCase: GetBooksUseCase) {}

  async run(): Promise<{body: GetBooksOutput |  { error: string }; statusCode: number }> {
    try {
      const response = await this.getBooksUseCase.execute();
      return { body: response, statusCode: 200 };
    } catch (error: unknown) {
      return {
        body: { error: error instanceof Error ? error.message : String(error) },
        statusCode: 404,
      };
    }
  }
}

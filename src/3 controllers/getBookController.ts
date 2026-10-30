import { Service } from 'typedi';
import { GetBookInput } from './dto/getBookInput.js';
import { GetBookOutput } from './dto/getBookOutput.js';
import { GetBookUseCase } from '../2 useCase/getBookUseCase.js';

@Service()
export class GetBookController {
  constructor(private getBookUseCase: GetBookUseCase) {}

  async run(input: GetBookInput): Promise<{body: GetBookOutput |  { error: string }; statusCode: number }> {
    try {
      const response = await this.getBookUseCase.execute(input);
      return { body: response, statusCode: 200 };
    } catch (error: unknown) {
      return {
        body: { error: error instanceof Error ? error.message : String(error) },
        statusCode: 404,
      };
    }
  }
}

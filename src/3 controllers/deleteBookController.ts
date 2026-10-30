import { Service } from 'typedi';
import { DeleteBookInput } from './dto/deleteBookInput.js';
import { DeleteBookUseCase } from '../2 useCase/deleteBookUseCase.js';

@Service()
export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async run(input: DeleteBookInput): Promise<{ body: unknown; statusCode: number }> {
    try {
      await this.deleteBookUseCase.execute(input);
      return {
        statusCode: 200,
        body: { message: 'Book deleted successfully' },
      };

    } catch (error: unknown) {
      return {
        body: { error: error instanceof Error ? error.message : String(error) },
        statusCode: 400,
      };
    }
  }
}

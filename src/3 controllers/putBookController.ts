import { Service } from 'typedi';
import { PutBookInput } from './dto/putBookInput.js';
import { PutBookOutput } from './dto/putBookOutput.js';
import { PutBookUseCase } from '../2 useCase/putBookUseCase.js';


@Service()
export class PutBookController {
  constructor(private putBookUseCase: PutBookUseCase) { }

  async run(input: PutBookInput): Promise<{ body: PutBookOutput | { error: string }; statusCode: number }> {
    try {
      const response = await this.putBookUseCase.execute(input);
      return {
        body: {
          id: response.id,
          message: 'Book updated successfully',
        },
        statusCode: 200,
      };

    } catch (error: unknown) {
      return {
        body: { error: error instanceof Error ? error.message : String(error) },
        statusCode: 400,
      };
    }
  }
}

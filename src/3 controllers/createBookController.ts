import { Service } from 'typedi';
import { CreateBookUseCase } from '../2 useCase/createBookUseCase.js';
import { CreateBookOutput } from './dto/createBookOutput.js';
import { CreateBookInput } from './dto/createBookInput.js';

@Service()
export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async run(input: CreateBookInput): Promise<{ body: CreateBookOutput | { error: string }; statusCode: number }> {
    try {
      const response = await this.createBookUseCase.execute(input);
      return {
        body: response, 
        statusCode: 201
      };

    } catch (error: any) {
      return {
        body: { error: error.message },
        statusCode: 400,
      };
    }
  }
}

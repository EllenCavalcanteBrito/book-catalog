import { Service } from 'typedi';
import { CreateBookInput } from './serializers/createBookInput.js';

@Service()
export class CreateBookController {
  async run(_input: CreateBookInput) {
    return {
      data: [],
      status: 'success',
    };
  }
}

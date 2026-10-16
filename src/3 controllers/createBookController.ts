import { CreateBookInput } from "./serializers/createBookInput";

export class CreateBookController {
  async run(_input: CreateBookInput) {
    return {
      data: [],
      status: 'success'
    }
  }
}
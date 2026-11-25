import 'reflect-metadata';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { DeleteBookInput } from '../../3 controllers/dto/deleteBookInput.js';
import { DeleteBookController } from '../../3 controllers/deleteBookController.js';
import { DynamoBookRepository } from '../repositories/DynamoBookRepository.js';

Container.set('DynamoBookRepositoryToken', new DynamoBookRepository());

async function eventInputAdapter(
  event: APIGatewayEvent
): Promise<DeleteBookInput> {
  const input = new DeleteBookInput();
  input.id = event.pathParameters?.id as string;
  return input;
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const input = await eventInputAdapter(event);

  const result = await Container.get(DeleteBookController).run(input);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body),
  }
}

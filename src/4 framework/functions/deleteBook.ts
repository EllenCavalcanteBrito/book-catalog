import 'reflect-metadata';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { DeleteBookInput } from '../../3 controllers/dto/deleteBookInput.js';
import { DeleteBookController } from '../../3 controllers/deleteBookController.js';

async function eventInputAdapter(
  event: APIGatewayEvent
): Promise<DeleteBookInput> {
  const body = event.body ? JSON.parse(event.body) : {};
  return body;
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

import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { CreateBookInput } from '../../3 controllers/dto/createBookInput.js';
import { CreateBookController } from '../../3 controllers/createBookController.js';
import 'reflect-metadata';


async function eventInputAdapter(
  event: APIGatewayEvent
): Promise<CreateBookInput> {
  const body = event.body ? JSON.parse(event.body) : {};
  return body;
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const input = await eventInputAdapter(event);

  const result = await Container.get(CreateBookController).run(input);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body),
  }
}

import 'reflect-metadata';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { PutBookInput } from '../../3 controllers/dto/putBookInput.js';
import { PutBookController } from '../../3 controllers/putBookController.js';

async function eventInputAdapter(
  event: APIGatewayEvent
): Promise<PutBookInput> {
  const body = event.body ? JSON.parse(event.body) : {};
  const id = event.pathParameters?.id;

  return {
    id,
    ...body,
  };
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const input = await eventInputAdapter(event);

  const result = await Container.get(PutBookController).run(input);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body),
  };
};

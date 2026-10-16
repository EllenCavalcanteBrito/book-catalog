import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import Container from 'typedi';
import { CreateBookInput } from '../../3 controllers/serializers/createBookInput.js';
import { CreateBookController } from '../../3 controllers/createBookController.js';

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

  return await Container.get(CreateBookController).run(input); //ajustar controller
};

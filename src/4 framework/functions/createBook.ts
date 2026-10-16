import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CreateBookInput } from '../../3 controllers/serializers/createBookInput';
import { CreateBookController } from '../../3 controllers/createBookController';

async function eventInputAdapter(event: APIGatewayEvent): Promise<CreateBookInput> {
  const body = event.body ? JSON.parse(event.body) : {};
  return body;
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const input = await eventInputAdapter(event);

  return await CreateBookController.run(input);
};
import 'reflect-metadata';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { GetBookInput } from '../../3 controllers/dto/getBookInput.js';
import { GetBookController } from '../../3 controllers/getBookController.js';

async function eventInputAdapter(
  event: APIGatewayEvent
): Promise<GetBookInput> {
  const pathParameters = event.pathParameters ?? {};
  const input = new GetBookInput();
  input.id = pathParameters.id as string;

  return input
}

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const input = await eventInputAdapter(event);

  const result = await Container.get(GetBookController).run(input);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body),
  };
};

import 'reflect-metadata';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Container } from 'typedi';
import { GetBooksController } from '../../3 controllers/getBooksController.js';
import { DynamoBookRepository } from '../repositories/DynamoBookRepository.js';

Container.set('DynamoBookRepositoryToken', new DynamoBookRepository());

export const handler = async (
  _event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const result = await Container.get(GetBooksController).run();

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result.body),
  };
};

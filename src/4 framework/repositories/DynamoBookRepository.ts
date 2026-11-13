import { DeleteCommand, GetCommand, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { IBookRepository } from "../../1 domain/interface/IBookRepository.js";
import { Book } from "../../1 domain/entities/Book.js";
import { dynamoDb } from "../config/DynamoDBConnection.js";
import { v4 as uuidv4 } from 'uuid';

export class DynamoBookRepository implements IBookRepository {
  private tableName = "Books";

  async create(title: string, author: string, pages: number): Promise<Book> {
    const book = new Book(uuidv4(), title, author, pages);

    await this.save(book);
    return book;
  }

  async save(book: Book): Promise<void> {
    const command = new PutCommand({
      TableName: this.tableName,
      Item: {
        id: book.id,
        title: book.title,
        author: book.author,
        pages: book.pages,
      },
    });

    await dynamoDb.send(command);
  }

  async findAll(): Promise<Book[]> {
    const command = new ScanCommand({
      TableName: this.tableName,
    });

    const response = await dynamoDb.send(command);
    return (response.Items || []).map((item) => new Book(item.id, item.title, item.author, item.pages));
  }

  async findById(id: string): Promise<Book | null> {
    const command = new GetCommand({
      TableName: this.tableName,
      Key: { id },
    });

    const response = await dynamoDb.send(command);
    if (!response.Item) return null;

    return new Book(response.Item.id, response.Item.title, response.Item.author, response.Item.pages);
  }

  async update(book: Book): Promise<Book | null> {
    const command = new UpdateCommand({
      TableName: this.tableName,
      Key: { id: book.id },
      UpdateExpression: "set title = :title, author = :author, pages = :pages",
      ExpressionAttributeValues: {
        ":title": book.title,
        ":author": book.author,
        ":pages": book.pages,
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await dynamoDb.send(command);
    if (!response.Attributes) return null;

    return new Book(response.Attributes.id, response.Attributes.title, response.Attributes.author, response.Attributes.pages);
  }

  async delete(id: string): Promise<void> {
    const command = new DeleteCommand({
      TableName: this.tableName,
      Key: { id },
    });

    await dynamoDb.send(command);
  }
}
import { Book } from '../entities/Book.js';

export interface IBookRepository {
  create(title: string, author: string, pages: number): Promise<Book>;
}

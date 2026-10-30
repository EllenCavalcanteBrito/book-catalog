import { Book } from '../entities/Book.js';

export interface IBookRepository {
  create(title: string, author: string, pages: number): Promise<Book>;
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  update(book: Book): Promise<Book | null>;
  delete(id: string): Promise<void>;
}

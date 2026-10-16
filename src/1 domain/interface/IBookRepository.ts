import { Book } from "../entities/Book";

export interface IBookRepository {
  create(title: string, author: string, pages: number): Promise<Book>;
}
import { Book } from "../../1 domain/entities/Book";
import { IBookRepository } from "../../1 domain/interface/IBookRepository";

export class BookRepository implements IBookRepository {
  private books: Book[] = [];

  public async create(title: string, author: string, pages: number): Promise<Book> {
    const newBook: Book = {
      id: Math.random().toString(),
      title,
      author,
      pages
    };

    this.books.push(newBook);
    return newBook;
  }
}
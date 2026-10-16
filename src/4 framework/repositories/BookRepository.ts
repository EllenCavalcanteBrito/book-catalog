import { v4 as uuidv4 } from 'uuid';
import { IBookRepository } from '../../1 domain/interface/IBookRepository.js';
import { Book } from '../../1 domain/entities/Book.js';

export class BookRepository implements IBookRepository {
  private books: Book[] = [];

  public async create(
    title: string,
    author: string,
    pages: number
  ): Promise<Book> {
    const newBook: Book = {
      id: uuidv4(),
      title,
      author,
      pages,
    };

    this.books.push(newBook);
    return newBook;
  }
}

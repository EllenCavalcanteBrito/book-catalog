import { v4 as uuidv4 } from 'uuid';
import { IBookRepository } from '../../1 domain/interface/IBookRepository.js';
import { Book } from '../../1 domain/entities/Book.js';
import { Service } from 'typedi';

@Service()

export class BookRepository implements IBookRepository {
  private static books: Book[] = [];

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

    BookRepository.books.push(newBook);
    return newBook;
  }

  public async findById(id: string): Promise<Book | null> {
    return BookRepository.books.find((book: Book) => book.id === id) ?? null;
  }

  public async findAll(): Promise<Book[]> {
    return BookRepository.books;
  }

  public async update(book: Book): Promise<Book | null> {
    const bookIndex = BookRepository.books.findIndex(
      (existingBook: Book) => existingBook.id === book.id
    );

    if (bookIndex === -1) {
      return null;
    }

    BookRepository.books[bookIndex] = book;
    return book;
  }

  public async delete(id: string): Promise<void> {
    const bookIndex = BookRepository.books.findIndex((book: Book) => book.id === id);

    if (bookIndex !== -1) {
      BookRepository.books.splice(bookIndex, 1);
    }
  }
}

import { Service } from 'typedi';
import { IBookRepository } from '../../1 domain/interface/IBookRepository.js';
import { Book } from '../../1 domain/entities/Book.js';

@Service()
export class ExternalBookRepository implements IBookRepository {
  private apiUrl = 'https://openlibrary.org/search.json?q=javascript';

  async findAll(): Promise<Book[]> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) return [];

      const data = await response.json();

      const books: Book[] = data.docs.slice(0, 5).map((item: any) => ({
        id: item.key || String(Math.random()),
        title: item.title || 'Título desconhecido',
        author: item.author_name ? item.author_name[0] : 'Autor desconhecido',
        pages: item.number_of_pages_median || 150,
      }));

      return books;
    } catch (error) {
      console.error('Erro ao buscar livros externos:', error);
      return [];
    }
  }

  async create(_title: string, _author: string, _pages: number): Promise<Book> {
    throw new Error('Not implemented');
  }

  async findById(_id: string): Promise<Book | null> {
    return null;
  }

  async update(_book: Book): Promise<Book | null> {
    return null;
  }

  async delete(_id: string): Promise<void> {
  }
}
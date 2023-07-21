import { Author, Book, Genre } from '../entities/entities';
import { IGenericRepository } from '../abstracts/abstract';

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;
  abstract books: IGenericRepository<Book>;
  abstract genre: IGenericRepository<Genre>;
}

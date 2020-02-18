import { Book } from './Book';
import { BookIterator } from './BookIterator';
import { MyIterator } from '../MyIterator';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  private sortByName(): void {
    this.books.sort((a: Book, b: Book) => a.getName() > b.getName() ? 1 : -1);
  }

  private sortByYear(): void {
    this.books.sort((a: Book, b: Book) => a.getYear() > b.getYear() ? 1 : -1);
  }

  private sortByAuthor(): void {
    this.books.sort((a: Book, b: Book) => a.getAuthor() > b.getAuthor() ? 1 : -1);
  }

  sortedByNameIterator(): MyIterator<Book> {
    this.sortByName();
    return new BookIterator([ ...this.books ]);
  }

  sortedByAuthorIterator(): MyIterator<Book> {
    this.sortByAuthor();
    return new BookIterator([ ...this.books ]);
  }

  sortedByYearIterator(): MyIterator<Book> {
    this.sortByYear()
    return new BookIterator([ ...this.books ]);
  }
}

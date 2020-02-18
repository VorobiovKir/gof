import { Book } from './Book';
import { MyIterator } from '../MyIterator';

export class BookIterator implements MyIterator<Book> {
  private current: number = 0;

  constructor(private collection: Book[]) {}

  hasNext(): boolean {
    return this.current < this.collection.length;
  }

  next(): Book {
    const item = this.collection[this.current];
    this.current += 1;
    return item;
  }
}

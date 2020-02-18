export interface MyIterator<T> {
  next(): T;
  hasNext(): boolean;
}

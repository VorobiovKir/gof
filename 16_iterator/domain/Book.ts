export class Book {
  constructor(private name: string, private year: number, private author: string) {}

  getName(): string {
    return this.name;
  }

  getYear(): number {
    return this.year;
  }

  getAuthor(): string {
    return this.author;
  }
}

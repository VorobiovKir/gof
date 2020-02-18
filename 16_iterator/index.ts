import { Library } from "./domain/Library";
import { Book } from "./domain/Book";

class Main {
  demo() {
    const library = new Library();
    
    const firstBook = new Book('first book', 2014, 'Vasiliy Ovechkin');
    const secondBook = new Book('second book', 1994, 'Petr Lytskiy');
    const thirdBook = new Book('third book', 2020, 'Ivan Ivanov');

    library.addBook(firstBook);
    library.addBook(secondBook);
    library.addBook(thirdBook);

    const yearIterator = library.sortedByYearIterator();

    while (yearIterator.hasNext()) {
      console.log(`YEAR: ${yearIterator.next().getYear()}`);
    }

    const authorIterator = library.sortedByAuthorIterator();

    while (authorIterator.hasNext()) {
      console.log(`AUTHOR: ${authorIterator.next().getAuthor()}`);
    }

    const nameIterator = library.sortedByNameIterator();

    while (nameIterator.hasNext()) {
      console.log(`NAME: ${nameIterator.next().getName()}`);
    }
  }
}

const app = new Main();
app.demo();

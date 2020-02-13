import { PizzaInvoker } from './PizzaInvoker';
import { Pizza } from './Pizza';
import { Ingridients } from './Ingridients';

class Main {
  demo() {

    /* PREPARE EMPTY PIZZA */
    const pizza = new Pizza();

    let ingridients = pizza.getIngridients();
    console.assert(!ingridients.bacon, 'something goes wrong!');
    console.assert(!ingridients.cheese, 'something goes wrong!');
    console.assert(!ingridients.mashroom, 'something goes wrong!');
    console.assert(!ingridients.pineapple, 'something goes wrong!');
    console.assert(!ingridients.seafood, 'something goes wrong!');

    /* ADD BACON AND CHEESE TO PIZZA */
    const pizzaInvoker = new PizzaInvoker();
    pizzaInvoker.addIngridients(pizza, [Ingridients.bacon, Ingridients.cheese]);

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon, 'something goes wrong!');
    console.assert(ingridients.cheese, 'something goes wrong!');
    console.assert(!ingridients.mashroom, 'something goes wrong!');
    console.assert(!ingridients.pineapple, 'something goes wrong!');
    console.assert(!ingridients.seafood, 'something goes wrong!');

    /* UNDO ADDING CHEESE TO PIZZA */
    pizzaInvoker.undoLast();

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon, 'something goes wrong!');
    console.assert(!ingridients.cheese, 'something goes wrong!');
    console.assert(!ingridients.mashroom, 'something goes wrong!');
    console.assert(!ingridients.pineapple, 'something goes wrong!');
    console.assert(!ingridients.seafood, 'something goes wrong!');

    /* REDO LAST UNDO ACTION (adding cheese) */
    pizzaInvoker.redoLast();

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon, 'something goes wrong!');
    console.assert(ingridients.cheese, 'something goes wrong!');
    console.assert(!ingridients.mashroom, 'something goes wrong!');
    console.assert(!ingridients.pineapple, 'something goes wrong!');
    console.assert(!ingridients.seafood, 'something goes wrong!');
  }
}

const app = new Main();
app.demo();
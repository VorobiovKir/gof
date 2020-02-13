import { PizzaInvoker } from './PizzaInvoker';
import { Pizza } from './Pizza';
import { Ingridients } from './Ingridients';

class Main {
  demo() {

    /* PREPARE EMPTY PIZZA */
    const pizza = new Pizza();

    let ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon === false, 'something goes wrong!');
    console.assert(ingridients.cheese === false, 'something goes wrong!');
    console.assert(ingridients.mashroom === false, 'something goes wrong!');
    console.assert(ingridients.pineapple === false, 'something goes wrong!');
    console.assert(ingridients.seafood === false, 'something goes wrong!');

    /* ADD BACON AND CHEESE TO PIZZA */
    const pizzaInvoker = new PizzaInvoker();
    pizzaInvoker.addIngridients(pizza, [Ingridients.bacon, Ingridients.pineapple ,Ingridients.cheese]);

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon === true, 'something goes wrong!');
    console.assert(ingridients.cheese === true, 'something goes wrong!');
    console.assert(ingridients.mashroom === false, 'something goes wrong!');
    console.assert(ingridients.pineapple === true, 'something goes wrong!');
    console.assert(ingridients.seafood === false, 'something goes wrong!');

    /* UNDO ADDING CHEESE TO PIZZA */
    pizzaInvoker.undoLast();

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon === true, 'something goes wrong!');
    console.assert(ingridients.cheese === false, 'something goes wrong!');
    console.assert(ingridients.mashroom === false, 'something goes wrong!');
    console.assert(ingridients.pineapple === true, 'something goes wrong!');
    console.assert(ingridients.seafood === false, 'something goes wrong!');

    /* REDO LAST UNDO ACTION (adding cheese) */
    pizzaInvoker.redoLast();

    ingridients = pizza.getIngridients();
    console.assert(ingridients.bacon === true, 'something goes wrong!');
    console.assert(ingridients.cheese === true, 'something goes wrong!');
    console.assert(ingridients.mashroom === false, 'something goes wrong!');
    console.assert(ingridients.pineapple === true, 'something goes wrong!');
    console.assert(ingridients.seafood === false, 'something goes wrong!');
  }
}

const app = new Main();
app.demo();
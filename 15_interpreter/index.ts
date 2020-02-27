import { PizzaInvoker } from './PizzaInvoker';
import { Pizza } from './Pizza';

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

    /* ADD BACON, PINEAPPLE AND CHEESE TO PIZZA */
    const pizzaInvoker = new PizzaInvoker();
    pizzaInvoker.executeExpression(pizza, 'cheese bacon pineapple;');

    ingridients = pizza.getIngridients();
    console.log(ingridients);
    console.assert(ingridients.bacon === true, 'something goes wrong!');
    console.assert(ingridients.cheese === true, 'something goes wrong!');
    console.assert(ingridients.mashroom === false, 'something goes wrong!');
    console.assert(ingridients.pineapple === true, 'something goes wrong!');
    console.assert(ingridients.seafood === false, 'something goes wrong!');
  }
}

const app = new Main();
app.demo();
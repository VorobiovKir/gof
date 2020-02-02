import { PizzaBuilder } from './PazzaBuilder';


class Main {
  demo() {
    const ingridients = ['cheese', 'bacon'];
    const pizzaBuilder = new PizzaBuilder();
    const pizza = pizzaBuilder.build(ingridients);
    console.log(pizza);
    const oneMorePizza = pizzaBuilder.build(['seafood', 'pineapple']);
    console.log(oneMorePizza);
  }
}

const app = new Main();
app.demo();
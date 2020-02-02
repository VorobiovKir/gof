import { PizzaCheese } from "./Pizza/PizzaCheese";
import { Pizza } from "./Pizza/Pizza";
import { PizzaMushroom } from "./Pizza/PizzaMushroom";
import { PizzaSeafood } from "./Pizza/PizzaSeafood";
import { PizzaBacon } from "./Pizza/PizzaBacon";
import { PizzaPineapple } from "./Pizza/PizzaPineapple";



class Main {
  demo() {
    const pizzaWithCheese = new PizzaCheese(new Pizza());
    const pizzaWithAll = new PizzaMushroom(new PizzaSeafood(new PizzaCheese(new PizzaBacon(new PizzaPineapple(new Pizza())))));
  }
}

const app = new Main();
app.demo();
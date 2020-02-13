import { PizzaCommand } from './PizzaCommand';

export class AddCheeseCommand extends PizzaCommand {
  execute() {
    this.pizza.addCheese();
  }
  undo() {
    this.pizza.removeCheese();
  }
}

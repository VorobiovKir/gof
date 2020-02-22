import { PizzaCommand } from './PizzaCommand';

export class AddSeafoodCommand extends PizzaCommand {
  execute() {
    this.pizza.addSeafood();
  }
  undo() {
    this.pizza.removeSeafood();
  }
}


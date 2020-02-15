import { PizzaCommand } from './PizzaCommand';

export class AddPineappleCommand extends PizzaCommand {
  execute() {
    this.pizza.addPineapple();
  }
  undo() {
    this.pizza.removePineapple();
  }
}

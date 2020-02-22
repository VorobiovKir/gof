import { PizzaCommand } from './PizzaCommand';

export class AddMashroomCommand extends PizzaCommand {
  execute() {
    this.pizza.addMashroom();
  }
  undo() {
    this.pizza.removeMashroom();
  }
}

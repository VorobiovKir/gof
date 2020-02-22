import { PizzaCommand } from './PizzaCommand';

export class AddBaconCommand extends PizzaCommand {
  execute() {
    this.pizza.addBacon();
  }
  undo() {
    this.pizza.removeBacon();
  }
}

import { PizzaCommand } from "../commands/PizzaCommand";
import { IExpression } from "./IExpression";


export class PizzaTerminateCommandExpression implements IExpression {
  constructor(private command?: PizzaCommand) {}

  interprete() {
    if (this.command) {
      this.command.execute();
    }
  }
}
import { PizzaCommand } from "../commands/PizzaCommand";
import { IExpression } from "./IExpression";


export class PizzaCommandExpression implements IExpression {
  private childExpressions: IExpression[] = [];
  
  constructor(private command?: PizzaCommand) {}

  addChildExpression(expression: IExpression) {
    this.childExpressions.push(expression);
  }

  interprete() {
    if (this.command) {
      this.command.execute();
    }

    this.childExpressions.forEach(childExpression => {
      childExpression.interprete();
    })
  }
}
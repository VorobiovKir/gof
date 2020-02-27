import { IPizzaInvoker } from './IPizzaInvoker';
import { PizzaCommand } from './commands/PizzaCommand';
import { Pizza } from './Pizza';
import { Ingridients } from './Ingridients';
import { PizzaCommandExpression } from './expressions/PizzaCommandExpression';
import { 
  AddBaconCommand, AddCheeseCommand, AddMashroomCommand, 
  AddPineappleCommand, AddSeafoodCommand 
} from './commands'; 
import { PizzaTerminateCommandExpression } from './expressions/PizzaTerminateCommandExpression';

export class PizzaInvoker implements IPizzaInvoker {
  private executedList: PizzaCommand[] = [];
  private undoList: PizzaCommand[] = [];

  private execute(command: PizzaCommand) {
    command.execute();
    this.executedList.push(command);
  }

  private getPizzaCommand(pizza: Pizza, ingridient: Ingridients): PizzaCommand {
    switch(ingridient) {
      case Ingridients.cheese:
        return new AddCheeseCommand(pizza);
      case Ingridients.bacon:
        return new AddBaconCommand(pizza);
      case Ingridients.pineapple:
        return new AddPineappleCommand(pizza);
      case Ingridients.mashroom:
        return new AddMashroomCommand(pizza);
      case Ingridients.seafood:
        return new AddSeafoodCommand(pizza);
      default:
        throw new Error(`Type ${ingridient} doesn't exists`);
    }
  }

  undoLast() {
    const lastCommand = this.executedList.pop();
    if (lastCommand) {
      lastCommand.undo();
      this.undoList.push(lastCommand);
    }
  }

  redoLast() {
    const lastUndoCommand = this.undoList.pop();
    if (lastUndoCommand) {
      lastUndoCommand.execute();
      this.executedList.push(lastUndoCommand);
    }
  }

  executeExpression(pizza: Pizza, commandExpession: string) {
    const baseExpression = new PizzaCommandExpression();
    
    const commands = commandExpession.split(' ');
    commands.some(command => {
      const isTerminate = command.split('').pop() === ';';
      const ingridient = command.replace(/\W/gi, '');

      const pizzaCommand = this.getPizzaCommand(pizza, ingridient as Ingridients);

      if (isTerminate) {
        baseExpression.addChildExpression(new PizzaTerminateCommandExpression(pizzaCommand));
        return true;
      }

      baseExpression.addChildExpression(new PizzaCommandExpression(pizzaCommand));
    });

    baseExpression.interprete();
  }

  addIngridients(pizza: Pizza, ingridients: Ingridients[] = []) {
    ingridients.forEach(ingridient => {
      const pizzaCommand = this.getPizzaCommand(pizza, ingridient);
      this.execute(pizzaCommand);
    });
  }
}

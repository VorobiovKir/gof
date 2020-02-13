import { Pizza } from '../Pizza';

export abstract class PizzaCommand {
  constructor(protected pizza: Pizza) {}

  abstract execute(): void;
  abstract undo(): void;
}

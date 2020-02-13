import { Pizza } from './Pizza';
import { Ingridients } from './Ingridients';

export interface IPizzaInvoker {
  undoLast(): void;
  redoLast(): void;
  addIngridients(pizza: Pizza, ingridients: Ingridients[]): void;
}

import { IPizza } from './IPizza';

export class PizzaMushroom {
  constructor(pizza: IPizza) {
    pizza.mushroom = true;
  }
}
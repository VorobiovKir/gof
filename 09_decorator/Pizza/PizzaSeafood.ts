import { IPizza } from './IPizza';

export class PizzaSeafood {
  constructor(pizza: IPizza) {
    pizza.seafood = true;
  }
}
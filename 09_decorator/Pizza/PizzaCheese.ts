import { IPizza } from './IPizza';

export class PizzaCheese {
  constructor(pizza: IPizza) {
    pizza.cheese = true;
  }
}
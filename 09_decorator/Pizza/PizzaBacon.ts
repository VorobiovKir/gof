import { IPizza } from './IPizza';

export class PizzaBacon {
  constructor(pizza: IPizza) {
    pizza.bacon = true;
  }
}
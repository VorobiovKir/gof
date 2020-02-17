import { IngredientVisitor } from './IngredientVisitor';
import { Pizza } from '../Pizza';

export class CheeseIngredientVisitor extends IngredientVisitor {
  addToPizza(pizza: Pizza) {
    pizza.cheese = true;
  }
}

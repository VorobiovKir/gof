import { IngredientVisitor } from './IngredientVisitor';
import { Pizza } from '../Pizza';

export class PineappleIngredientVisitor extends IngredientVisitor {
  addToPizza(pizza: Pizza) {
    pizza.pineapple = true;
  }
}

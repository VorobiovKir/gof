import { IngredientVisitor } from './IngredientVisitor';
import { Pizza } from '../Pizza';

export class SeafoodIngredientVisitor extends IngredientVisitor {
  addToPizza(pizza: Pizza) {
    pizza.seafood = true;
  }
}

import { IngredientVisitor } from './IngredientVisitor';
import { Pizza } from '../Pizza';

export class MashroomIngredientVisitor extends IngredientVisitor {
  addToPizza(pizza: Pizza) {
    pizza.mashroom = true;
  }
}

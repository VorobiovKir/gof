import { IngredientVisitor } from './IngredientVisitor';
import { Pizza } from '../Pizza';

export class BaconIngredientVisitor extends IngredientVisitor {
  addToPizza(pizza: Pizza) {
    pizza.bacon = true;
  }
}

import { Pizza } from '../Pizza';

export abstract class IngredientVisitor {
  abstract addToPizza(pizza: Pizza): void;
}

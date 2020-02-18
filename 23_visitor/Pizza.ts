import { IngredientVisitor } from './ingredients/IngredientVisitor';

export class Pizza {
  cheese: boolean = false;
  bacon: boolean = false;
  mashroom: boolean = false;
  seafood: boolean = false;
  pineapple: boolean = false;

  addIngredient(ingredient: IngredientVisitor) {
    ingredient.addToPizza(this);
  }
}

import { Pizza } from './Pizza';
import { CheeseIngredientVisitor } from './ingredients/CheeseIngredientVisitor'
import { BaconIngredientVisitor } from './ingredients/BaconIngredientVisitor';
import { MashroomIngredientVisitor } from './ingredients/MashroomIngredientVisitor';
import { SeafoodIngredientVisitor } from './ingredients/SeafoodIngredientVisitor';
import { PineappleIngredientVisitor } from './ingredients/PineappleIngredientVisitor';


class Main {
  demo() {
    const pizza = new Pizza();
    const cheeseVisitor = new CheeseIngredientVisitor();
    const baconVisitor = new BaconIngredientVisitor();
    const mashroomVisitor = new MashroomIngredientVisitor();
    const seafoodVisitor = new SeafoodIngredientVisitor();
    const pineappleVisitor = new PineappleIngredientVisitor();

    pizza.addIngredient(cheeseVisitor);
    pizza.addIngredient(baconVisitor);
    pizza.addIngredient(mashroomVisitor);
    pizza.addIngredient(seafoodVisitor);
    pizza.addIngredient(pineappleVisitor);

    console.log(pizza);
  }
}

const app = new Main();
app.demo();



















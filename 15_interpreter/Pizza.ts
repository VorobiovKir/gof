import { Ingridients } from './Ingridients';

export class Pizza {
  private cheese: boolean = false;
  private bacon: boolean = false;
  private pineapple: boolean = false;
  private mashroom: boolean = false;
  private seafood: boolean = false;

  addCheese() { this.cheese = true; }
  removeCheese() { this.cheese = false; }

  addBacon() { this.bacon = true; }
  removeBacon() { this.bacon = false; }

  addPineapple() { this.pineapple = true; }
  removePineapple() { this.pineapple = false; }

  addMashroom() { this.mashroom = true; }
  removeMashroom() { this.mashroom = false; }

  addSeafood() { this.seafood = true; }
  removeSeafood() { this.seafood = false; }

  getIngridients(): Record<Ingridients, boolean> {
    return {
      cheese: this.cheese,
      bacon: this.bacon,
      pineapple: this.pineapple,
      mashroom: this.mashroom,
      seafood: this.seafood,
    }
  }
}

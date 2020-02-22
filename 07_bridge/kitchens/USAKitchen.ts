import { Kitchen } from "./Kitchen";

export class USAKitchen implements Kitchen {
  firstDish() {
    return 'mushroom soup';
  }

  secondDish() {
    return 't-bone stake';
  }

  dessert() {
    return 'cheese cake';
  }
}

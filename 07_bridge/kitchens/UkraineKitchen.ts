import { Kitchen } from "./Kitchen";

export class UkraineKitchen implements Kitchen {
  firstDish() {
    return 'borsh';
  }

  secondDish() {
    return 'meet balls';
  }

  dessert() {
    return 'smetanik';
  }
}

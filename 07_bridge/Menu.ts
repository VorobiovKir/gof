import { Kitchen } from "./kitchens/Kitchen";

export class Menu {
  constructor(private kitchen: Kitchen) {}

  complexDinner() {
    const firstDish = this.kitchen.firstDish();
    const secondDish = this.kitchen.secondDish();
    const dessert = this.kitchen.dessert();

    return {
      firstDish,
      secondDish,
      dessert,
    }
  }
}

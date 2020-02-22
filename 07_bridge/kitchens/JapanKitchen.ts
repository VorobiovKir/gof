import { Kitchen } from "./Kitchen";

export class JapanKitchen implements Kitchen {
  firstDish() {
    return 'pho soup';
  }

  secondDish() {
    return 'sushi';
  }

  dessert() {
    return 'sweeten cake';
  }
}

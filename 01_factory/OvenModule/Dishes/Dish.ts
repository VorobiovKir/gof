import Pizza from './Pizza';
import Potato from './Potato';
import Burger from './Burger';

export default abstract class Dish {
  abstract baking: () => any;

  static createDish(type: string): Dish {
    switch (type) {
      case 'pizza':
        return new Pizza();
      case 'potato':
        return new Potato();
      case 'burger':
        return new Burger();
      default:
        throw new Error(`Dish isn't existed in the list!`);
    }
  };
}
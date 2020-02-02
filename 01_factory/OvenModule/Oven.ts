import Dish from './Dishes/Dish';

export default class Owen {
  private dish: Dish;

  constructor(private dishName: string) {
    this.dish = Dish.createDish(dishName);
  }

  public bake() {
    this.dish.baking();
  }
}
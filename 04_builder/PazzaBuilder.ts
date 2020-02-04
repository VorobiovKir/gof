import { Pizza, IPizza } from './Pizza';

enum Ingridients {
  pineApple = 'pineapple',
  bacon = 'bacon',
  seafood = 'seafood',
  cheese = 'cheese',
  mushroom = 'mushroom',
};

export class PizzaBuilder {
  private pizza: IPizza;
  
  createPizza(): void {
    this.pizza = new Pizza();
  }

  addCheese(): void {
    this.pizza.cheese = true;
  }

  addBacon(): void {
    this.pizza.bacon = true;
  }

  addPineApple(): void {
    this.pizza.pineApple = true;
  }

  addMushroom(): void {
    this.pizza.mushroom = true;
  }

  addSeafood(): void {
    this.pizza.seafood = true;
  }

  addIngridient(ingridient: string): void {
    switch (ingridient) {
      case Ingridients.bacon:
        this.addBacon();
        break;
      case Ingridients.cheese:
        this.addCheese();
        break;
      case Ingridients.mushroom:
        this.addMushroom();
        break;
      case Ingridients.pineApple:
        this.addPineApple();
      case Ingridients.seafood:
        this.addSeafood();
        break;
      default:
        console.log(`I don't know this ingridient: ${ingridient}`);
    }
  }

  build(ingridients: string[] = []): Pizza {
    this.createPizza();
    
    ingridients.forEach(ingridient => this.addIngridient(ingridient));
    
    return this.pizza;
  }
}
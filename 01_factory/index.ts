import Oven from './OvenModule/Oven';

class Main {
  demo(dish: string) {
    const oven = new Oven('pizza');
    oven.bake();
  }
}

const app = new Main();
app.demo('pizza');
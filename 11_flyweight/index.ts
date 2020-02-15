



import { Troop } from './Units/Troop';
import { Tank } from './Units/Tank/Tank';
import { Infantryman } from './Units/Infantryman/Infantryman';

class Main {
  async demo() {
    const troop = new Troop();
    const tank = new Tank();
    const infantryman = new Infantryman();

    troop.addUnit(tank);
    troop.addUnit(tank);
    troop.addUnit(infantryman);
    troop.makeSound("attack");
  }
}

const app = new Main();
app.demo();

import { Oven } from './Oven';

class Main {
  demo() {
    const oven = new Oven();
    oven.getStatus();
    
    oven.burn();
    oven.getStatus();

    oven.waitLongTime();
    oven.getStatus();
  }
}

const app = new Main();
app.demo();

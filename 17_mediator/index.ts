import { Concierge } from './domain/Concierge';

class Main {
  demo() {
    const concierge = new Concierge();
    concierge.getMaster();
  }
}

const app = new Main();
app.demo();







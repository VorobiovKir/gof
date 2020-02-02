import { ThreadPool } from './ThreadPool';

class Main {
  demo() {
    for (let i = 0; i < 12; i++) {
      let thread = ThreadPool.getThread();
      console.log(thread);
    }

    console.log(ThreadPool.threads);
  }
}

const app = new Main();
app.demo();
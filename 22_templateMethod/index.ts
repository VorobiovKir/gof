import { TimeWriter } from './TimeWriter';
import { DateWriter } from './DateWriter';

class Main {
  demo() {    
    const timeWritter = new TimeWriter();
    timeWritter.write(); 

    const dateWritter = new DateWriter();
    dateWritter.write();
  }
}

const app = new Main();
app.demo();

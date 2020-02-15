import { StormServiceSubject } from './StormServiceSubject';
import { Airport } from './listeners/Airport';
import { School } from './listeners/School';
import { RoadService } from './listeners/RoadService';

class Main {
  demo() {
    const stormServiceSubject = new StormServiceSubject();

const roadService = new RoadService();
const airport = new Airport();
const school = new School();

stormServiceSubject.addListener(roadService);
stormServiceSubject.addListener(airport);
stormServiceSubject.addListener(school);

stormServiceSubject.notify('storm 9 level');
  }
}

const app = new Main();
app.demo();











import { ServiceHandler } from './ServiceHandler';

class Main {
  demo() {
    const serviceHanler = new ServiceHandler();
    let result: string;
    result = serviceHanler.invokeService('police');
    console.assert(result === 'Police are invoked', `something goes wrong: ${result}`);

    result = serviceHanler.invokeService('doctors');
    console.assert(result === 'Doctors are invoked', `something goes wrong: ${result}`);

    result = serviceHanler.invokeService('not installed services');
    console.assert(
      result === `Request not installed services haven't handled! Check please your request type!`,
      `something goes wrong: ${result}`
    );
  }
}

const app = new Main();
app.demo();

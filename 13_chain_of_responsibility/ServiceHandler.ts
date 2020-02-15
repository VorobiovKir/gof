import { Handler } from './handlers/Handler';
import { DoctorsHandler } from './handlers/DoctorHandler';
import { FirefightersHandler } from './handlers/FirefightersHandler';
import { NotFoundHandler } from './handlers/NotFoundHandler';
import { PoliceHandler } from './handlers/PoliceHandler';


export class ServiceHandler {
  private policeHandler: Handler = new PoliceHandler();
  private doctorsHandler: Handler = new DoctorsHandler();
  private firefightersHandler: Handler = new FirefightersHandler();
  private notFoundHandler: Handler = new NotFoundHandler();
  private processHandler: Handler;

  constructor() {
    this.processHandler = this.policeHandler;
    this.processHandler.setNext(this.doctorsHandler).setNext(this.firefightersHandler).setNext(this.notFoundHandler);
  }

  public invokeService(request: string): string {
    return this.processHandler.handle(request);
  }
}

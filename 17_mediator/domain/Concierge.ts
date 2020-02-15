import { ConciergeMediator } from '../ConciergeMediator';
import { IMediator } from '../IMediator';


export class Concierge {
  mediator: IMediator = new ConciergeMediator();

  getTaxi(): void {
    this.mediator.inform('taxi');
  }

  getMaster(): void {
    this.mediator.inform('master');
  }

  makeFlowersDelivery(): void {
    this.mediator.inform('flowersDelivery');
  }
}

import { IMediator } from './IMediator';
import { Client } from './domain/Client';
import { INotified } from './INotified';

export class ConciergeMediator implements IMediator {
  client: INotified = new Client();
  
  inform(type: string) {
    this.client.notify(type);
  }
}

import { INotified } from '../INotified';

export class Client implements INotified {
  notify(msg: string): void {
    console.log(`Client Notification: ${msg} was invoked!`);
  }
}

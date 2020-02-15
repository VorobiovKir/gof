import { IListener } from '../IListener';

export class Airport implements IListener {
  update(stormLevel: string): void {
    console.log(`Airport notification: ${stormLevel}`);
  }
}

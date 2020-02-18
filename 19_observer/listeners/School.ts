import { IListener } from '../IListener';

export class School implements IListener {
  update(stormLevel: string): void {
    console.log(`School notification: ${stormLevel}`);
  }
}

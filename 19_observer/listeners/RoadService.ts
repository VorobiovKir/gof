import { IListener } from '../IListener';

export class RoadService implements IListener {
  update(stormLevel: string): void {
    console.log(`Road Service notification: ${stormLevel}`);
  }
}

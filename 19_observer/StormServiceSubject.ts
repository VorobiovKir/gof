import { IListener } from './IListener';
import { ISubject } from './ISubject';

export class StormServiceSubject implements ISubject {
  private listeners: IListener[] = [];

  addListener(listeners: IListener) {
    this.listeners.push(listeners);
  }

  removeListener(listener: IListener) {
    const index = this.listeners.indexOf(listener);
    if (index != -1) {
      this.listeners.splice(index, 1);
    }
  }

  notify(stormLevel: string): void {
  this.listeners.forEach(listener => listener.update(stormLevel));
  }
}

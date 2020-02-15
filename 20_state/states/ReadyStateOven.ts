import { IState } from './IState';

export class ReadyStateOven implements IState {
  getStatus() {
    console.log(`I'm ready to cookie`);
  }
}

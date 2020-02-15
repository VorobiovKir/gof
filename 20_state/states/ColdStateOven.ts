import { IState } from './IState';

export class ColdStateOven implements IState {
  getStatus() {
    console.log(`I'm cold!`);
  }
}

import { IState } from './IState';

export class OverhotStateOven implements IState {
  getStatus() {
    console.log(`I'm overhot, so you can't cooking`);
  }
}

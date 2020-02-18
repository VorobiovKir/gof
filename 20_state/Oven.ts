import { ColdStateOven } from './states/ColdStateOven';
import { ReadyStateOven } from './states/ReadyStateOven';
import { OverhotStateOven } from './states/OverhotStateOven';
import { IState } from './states/IState';


export class Oven {
  private state: IState = new ColdStateOven();

  setState(state: IState) {
    this.state = state;
  }

  getStatus() {
    this.state.getStatus();
  }

  burn() {
    this.setState(new ReadyStateOven());
  }

  waitLongTime() {
    this.setState(new OverhotStateOven());
  }
}

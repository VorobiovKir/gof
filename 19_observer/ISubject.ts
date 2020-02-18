import { IListener } from './IListener';

export interface ISubject {
  addListener(listener: IListener): void;
  removeListener(listener: IListener): void;
  notify(msg: string): void;
}

import { SysElement } from './SysElement';

export class File extends SysElement {
  increment(): void {
    this.innerCount += 1;
  }

  decrement(): void {
    this.innerCount -= 1;
  }
}

import { SysElement } from './SysElement';

export class Folder extends SysElement {
  private elements: SysElement[] = [];

  addElement(element: SysElement): void {
    this.elements.push(element);
  }

  increment(): void {
    this.innerCount += 1;

    this.elements.forEach(element => {
      element.increment();
    });
  }

  decrement(): void {
    this.innerCount -= 1;

    this.elements.forEach(element => {
      element.decrement();
    });
  }
}

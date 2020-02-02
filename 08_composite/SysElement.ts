export abstract class SysElement {
  protected innerCount: number = 0;

  abstract increment(): void;
  abstract decrement(): void;

  getInnerCount(): number {
    return this.innerCount;
  }
}

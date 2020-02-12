export class Coords {
  constructor(private x: number = 0, private y: number = 0) {}

  moveTo(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  getCoords(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }
}

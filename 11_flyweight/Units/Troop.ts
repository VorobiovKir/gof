import { Coords } from './Coords';
import { Unit } from './Unit';

export class Troop {
  coords = new Coords();
  units: Unit[] = [];

  moveTo(x: number, y: number) {
    this.coords.moveTo(x, y);
    this.units.forEach(unit => unit.coords.moveTo(x, y));
  }

  makeSound(type: string) {
    this.units.forEach(unit => unit.sounds.getSound(type));
  }

  addUnit(unit: Unit) {
    const { x, y } = this.coords.getCoords();
    unit.coords.moveTo(x, y);
    this.units.push(unit);
  }
}

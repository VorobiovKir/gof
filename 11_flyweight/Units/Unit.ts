import { Coords } from './Coords';
import { ISound } from './ISound';

export abstract class Unit {
  coords = new Coords();
  abstract sounds: ISound;
}

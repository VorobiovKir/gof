import { ISound } from '../ISound';

export const InfantrymanSounds: ISound = class {
  static sounds: Record<string, string> = {
    attack: "Infantryman: Attack !!!",
    defende: "Infantryman: Defend !!!",
    holdPosition: "Infantryman: HOLD Position!!!"
  };

  static getSound(soundName: string): void {
    console.log(this.sounds[soundName] || "");
  }
};

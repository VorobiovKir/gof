import { ISound } from '../ISound';

export const TankSounds: ISound = class {
  static sounds: Record<string, string> = {
    attack: "Tank: Attack !!!",
    defende: "Tank: Defend !!!",
    holdPosition: "Tank: HOLD Position!!!"
  };

  static getSound(soundName: string): void {
    console.log(this.sounds[soundName] || "");
  }
};

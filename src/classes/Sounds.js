import { Howl } from "howler";
import { LEVEL_THEMES } from "../helpers/consts";
 
export const SFX = {
  COLLECT: "COLLECT",
  WIN: "WIN",
  TELEPORT: "TELEPORT",
  CLOCK: "CLOCK",
  HURT: "HURT",
  LOCK: "LOCK",
  SWITCH: "SWITCH",
  SWIM: "SWIM",
  CIABATTADIE: "CIABATTADIE",
  CIABATTAHIT: "CIABATTAHIT",
  LOSE: "LOSE",
  ENDGAME: "ENDGAME",
  DETERMINED: "DETERMINED",
  ICE: "ICE",
  LOSE: "LOSE",
  OPTIMISTIC: "OPTIMISTIC",
  BEGINNINGS: "BEGINNINGS",
  BOSS: "BOSS",
};

const SFX_FILES = {
  [SFX.COLLECT]: "/sfx/collect.mp3",
  [SFX.WIN]: "/sfx/win.wav",
  [SFX.TELEPORT]: "/sfx/teleport.mp3",
  [SFX.CLOCK]: "/sfx/clock.wav",
  [SFX.HURT]: "/sfx/hurt.wav",
  [SFX.LOCK]: "/sfx/lock.wav",
  [SFX.SWITCH]: "sfx/switch.wav",
  [SFX.SWIM]: "sfx/swim.wav",
  [SFX.CIABATTADIE]: "sfx/ciabattadie.wav",
  [SFX.CIABATTAHIT]: "sfx/ciabattahit.wav",
  [SFX.LOSE]: "sfx/lose.wav",
  [SFX.ENDGAME]: "sfx/endgame.wav",
  [SFX.DETERMINED]: "sfx/determined.mp3",
  [SFX.ICE]: "sfx/ice.mp3",
  [SFX.LOSE]: "sfx/lose.mp3",
  [SFX.OPTIMISTIC]: "sfx/optimistic.mp3",
  [SFX.BEGINNINGS]: "sfx/beginnings.mp3",
  [SFX.BOSS]: "sfx/boss.mp3",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.sfxVolume = 0.5;
  }

  init() {
    Object.keys(SFX_FILES).forEach((key) => {
      const file = SFX_FILES[key];

      const loop1 = key === SFX.BEGINNINGS; // Set loop to true for the music file
      const loop2 = key === SFX.ICE; 
      const loop3 = key === SFX.OPTIMISTIC; 
      const loop4 = key === SFX.DETERMINED; 
      const loop5 = key === SFX.BOSS; 
      const loop6 = key === SFX.LOSE; 

      this.howls[key] = new Howl({
        src: [file],
        loop: loop1 || loop2 || loop3 || loop4 || loop5 || loop6 // Enable looping for the music file
      });
    });
  }

  playSfx(key) {
    // Reference our sound in memory
    const howl = this.howls[key];
    this.howls[key] = howl; // Store the reference

    // Play it with current volume setting
    howl.volume(this.sfxVolume);
    howl.play();
  }

  stopSfx(key) {
    const howl = this.howls[key];
    if (howl) {
      howl.stop();
    }
  }
}

const soundsManager = new Sounds();

export default soundsManager;
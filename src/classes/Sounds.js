import { Howl } from "howler";
 
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
  TESTMUSIC: "TESTMUSIC",
  LOSE: "LOSE",
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
  [SFX.TESTMUSIC]: "sfx/testmusic.wav",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.sfxVolume = 0.5;
  }

  init() {
    Object.keys(SFX_FILES).forEach((key) => {
      const file = SFX_FILES[key];
      this.howls[key] = new Howl({
        src: [file],
      });
    });
  }

  playSfx(key) {
    // Reference our sound in memory
    const howl = this.howls[key];

    // Play it with current volume setting
    howl.volume(this.sfxVolume);
    howl.play();
  }
}

const soundsManager = new Sounds();

export default soundsManager;
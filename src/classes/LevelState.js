import { PLACEMENT_TYPE_HERO, PLACEMENT_TYPE_WALL, LEVEL_THEMES } from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";
import LevelsMap from "../levels/LevelsMap";
import { Inventory } from "./Inventory";
import { LevelAnimatedFrames } from "./LevelAnimatedFrames";
import { Camera } from "./Camera";
import { Clock } from "./Clock";
import soundsManager, { SFX } from "./Sounds";
import level from "../levels/TutorialLevel";


export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;
    this.directionControls = new DirectionControls();
    this.editModePlacementType = PLACEMENT_TYPE_WALL;
   
    // if (this.level.theme === LEVEL_THEMES.GREEN) {
    // this.music = soundsManager.playSfx(SFX.TESTMUSIC)
    // }


    this.isPaused = false;

    this.totalScore = 0;

    // Start the level!
    this.start();
  }

  start() {
    this.isCompleted = false;
    this.deathOutcome = null;
    const levelData = LevelsMap[this.id];

    this.theme = levelData.theme;
    this.tilesWidth = levelData.tilesWidth;
    this.tilesHeight = levelData.tilesHeight;
    


      if (this.theme === LEVEL_THEMES.YELLOW) {
      this.music = soundsManager.playSfx(SFX.BEGINNINGS)
      } else if (this.theme === LEVEL_THEMES.BLUE) {
      this.music = soundsManager.playSfx(SFX.ICE)
      } else if (this.theme === LEVEL_THEMES.PINK) {
      this.music = soundsManager.playSfx(SFX.OPTIMISTIC)  
      } else if (this.theme === LEVEL_THEMES.GREEN) {
      this.music = soundsManager.playSfx(SFX.DETERMINED)  
      } else if (this.theme === LEVEL_THEMES.GRAY) {
      this.music = soundsManager.playSfx(SFX.BOSS)  
      }



    this.placements = levelData.placements.map((config) => {
      return placementFactory.createPlacement(config, this);
    });

    // Create fresh inventory
    this.inventory = new Inventory();

    // Create a frame animation manager
    this.animatedFrames = new LevelAnimatedFrames();

    // Cache a reference to the hero
    this.heroRef = this.placements.find((p) => p.type === PLACEMENT_TYPE_HERO);

    // Create a camera
    this.camera = new Camera(this);

        // Create a clock
     this.clock = new Clock(300, this);

    // Initialize levelScore to zero at the start of each level
    this.levelScore = 0;

    this.startGameLoop();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  calculateScore(remainingTime, itemPickups, levelCompleted) {
    const timeMultiplier = remainingTime * 10;
    const itemPoints = itemPickups * 200;
    const levelCompletedPoints = levelCompleted ? 1000 : 0;

    // Calculate the total score for the current level
    const totalScore = timeMultiplier + itemPoints + levelCompletedPoints;

    return totalScore;
  }

  handleItemCollection(remainingTime) {
    const itemPickups = this.inventory.getItemsCollected();
    const levelCompleted = this.isCompleted;
    const newScore = this.calculateScore(remainingTime, itemPickups, levelCompleted);
  
    // Update the current level's score
    this.levelScore = newScore;
  
    if (this.isCompleted) {
      // Add the current level's score to the global total score
      this.totalScore += this.levelScore;
      console.log("Total Score:", this.totalScore);
    }
  
    console.log("Remaining Time:", remainingTime);
    console.log("Item Pickups:", itemPickups);
    console.log("Level Completed:", levelCompleted);
    console.log("New Score:", newScore);
  
    // Emit the updated state
    this.onEmit(this.getState());
  }
  

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this));
  }

  deletePlacement(placementToRemove) {
    this.placements = this.placements.filter((p) => {
      return p.id !== placementToRemove.id;
    });
  }

  copyPlacementsToClipboard() {
    // Convert the Placements to type,x,y JSON
    const placementsData = this.placements.map((p) => {
      return {
        type: p.type,
        x: p.x,
        y: p.y,
      };
    });

    // Copy the data to the clipboard for moving into map files after editing
    navigator.clipboard.writeText(JSON.stringify(placementsData)).then(
      () => {
        console.log("Content copied to clipboard");

        // Also console log the output
        console.log(placementsData);
      },
      () => {
        console.error("Failed to copy");
      }
    );
  }

  setEditModePlacementType(newType) {
    this.editModePlacementType = newType;
  }

  tick() {
    if (!this.isPaused) {
      if (this.directionControls.direction) {
        this.heroRef.controllerMoveRequested(this.directionControls.direction);
      }
      this.placements.forEach((placement) => {
        placement.tick();
      });
  
      // Work on animation frames
      this.animatedFrames.tick();
  
      // Update the camera
      this.camera.tick();
  
      // Update the clock
      this.clock.tick();
  
      const remainingTime = this.clock.secondsRemaining;
  
      // Emit any changes to React
      this.onEmit(this.getState());
    }
  }
  
  isPositionOutOfBounds(x, y) {
    return (
      x === 0 ||
      y === 0 ||
      x >= this.tilesWidth + 1 ||
      y >= this.tilesHeight + 1
    );
  }

  switchAllDoors() {
    this.placements.forEach((placement) => {
      if (placement.toggleIsRaised) {
        placement.toggleIsRaised();
      }
    });
  }

  stealInventory() {
    this.placements.forEach((p) => {
      p.resetHasBeenCollected();
    });
    this.inventory.clear();
  }

  setDeathOutcome(causeOfDeath) {
    this.deathOutcome = causeOfDeath;
    this.gameLoop.stop();
    // soundsManager.stopSfx(SFX.LEVEL);

    if (this.theme === LEVEL_THEMES.YELLOW) {
      this.music = soundsManager.stopSfx(SFX.BEGINNINGS)
      } else if (this.theme === LEVEL_THEMES.BLUE) {
      this.music = soundsManager.stopSfx(SFX.ICE)
      } else if (this.theme === LEVEL_THEMES.PINK) {
      this.music = soundsManager.stopSfx(SFX.OPTIMISTIC)  
      } else if (this.theme === LEVEL_THEMES.GREEN) {
      this.music = soundsManager.stopSfx(SFX.DETERMINED)  
      } else if (this.theme === LEVEL_THEMES.GRAY) {
      this.music = soundsManager.stopSfx(SFX.BOSS)  
      }

      this.music = soundsManager.playSfx(SFX.LOSE) 
  }

  completeLevel() {
    this.isCompleted = true;
    const remainingTime = this.clock.secondsRemaining;

    // Calculate the level score
    const levelScore = this.calculateScore(remainingTime, this.inventory.getItemsCollected(), true);

    // Add the level score to the total score
    this.totalScore += levelScore;

    // Emit the updated state
    this.onEmit(this.getState());
    this.gameLoop.stop();

    if (this.theme === LEVEL_THEMES.YELLOW) {
      this.music = soundsManager.stopSfx(SFX.BEGINNINGS)
      } else if (this.theme === LEVEL_THEMES.BLUE) {
      this.music = soundsManager.stopSfx(SFX.ICE)
      } else if (this.theme === LEVEL_THEMES.PINK) {
      this.music = soundsManager.stopSfx(SFX.OPTIMISTIC)  
      } else if (this.theme === LEVEL_THEMES.GREEN) {
      this.music = soundsManager.stopSfx(SFX.DETERMINED)  
      } else if (this.theme === LEVEL_THEMES.GRAY) {
      this.music = soundsManager.stopSfx(SFX.BOSS)  
      }
  }


  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
      deathOutcome: this.deathOutcome,
      isCompleted: this.isCompleted,
      cameraTransformX: this.camera.transformX,
      cameraTransformY: this.camera.transformY,
      secondsRemaining: this.clock.secondsRemaining,
      inventory: this.inventory,
      levelScore: this.levelScore,
      totalScore: this.totalScore, 
      restart: () => {
        this.start();
      },
      // Edit Mode API
      enableEditing: true,
      editModePlacementType: this.editModePlacementType,
      addPlacement: this.addPlacement.bind(this),
      deletePlacement: this.deletePlacement.bind(this),
      setEditModePlacementType: this.setEditModePlacementType.bind(this),
      copyPlacementsToClipboard: this.copyPlacementsToClipboard.bind(this),
    };
  }

  destroy() {
    // Tear down the level.
    this.gameLoop.stop();
    this.directionControls.unbind();
  }
}

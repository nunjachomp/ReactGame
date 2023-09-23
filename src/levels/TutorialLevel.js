import {
    LEVEL_THEMES,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_WALL,
    PLACEMENT_TYPE_LOCK,
    PLACEMENT_TYPE_KEY,
    PLACEMENT_TYPE_CONVEYOR,
    PLACEMENT_TYPE_WATER,
    PLACEMENT_TYPE_FIRE,
    PLACEMENT_TYPE_ICE,
    PLACEMENT_TYPE_ICE_PICKUP,
    PLACEMENT_TYPE_WATER_PICKUP,
    PLACEMENT_TYPE_FIRE_PICKUP,
    PLACEMENT_TYPE_ROAMING_ENEMY,
    PLACEMENT_TYPE_GROUND_ENEMY,
    PLACEMENT_TYPE_FLYING_ENEMY,
    PLACEMENT_TYPE_SWITCH_DOOR,
    PLACEMENT_TYPE_SWITCH,
    PLACEMENT_TYPE_TELEPORT,
    PLACEMENT_TYPE_THIEF,
    PLACEMENT_TYPE_CIABATTA
  } from "../helpers/consts";
  
  const specialTiles = [{ x: 4, y: 2, type: PLACEMENT_TYPE_CONVEYOR, direction: "RIGHT" },{ x: 4, y: 1, type: PLACEMENT_TYPE_CONVEYOR, direction: "LEFT" }, { x: 1, y: 9, type: PLACEMENT_TYPE_ICE, corner: "BOTTOM_LEFT" }]

  const level = {
    theme: LEVEL_THEMES.YELLOW,
    tilesWidth: 9,
    tilesHeight: 9,
    placements: [{"type":"HERO","x":4,"y":5},{"type":"CIABATTA","x":2,"y":2},{"type":"FIRE","x":5,"y":1},{"type":"FIRE","x":6,"y":1},{"type":"FIRE","x":7,"y":1},{"type":"WALL","x":1,"y":1},{"type":"WALL","x":9,"y":1},{"type":"FIRE","x":7,"y":2},{"type":"FIRE","x":6,"y":2},{"type":"FIRE","x":5,"y":2},{"type":"WALL","x":9,"y":2},{"type":"WALL","x":9,"y":3},{"type":"WALL","x":8,"y":3},{"type":"WALL","x":7,"y":3},{"type":"WALL","x":6,"y":3},{"type":"WALL","x":5,"y":3},{"type":"WALL","x":1,"y":2},{"type":"WALL","x":1,"y":3},{"type":"WALL","x":3,"y":3},{"type":"WALL","x":4,"y":3},{"type":"FIRE","x":8,"y":1},{"type":"FIRE","x":8,"y":2},{"type":"GOAL","x":9,"y":9},{"type":"ICE","x":1,"y":8},{"type":"ICE","x":2,"y":9},{"type":"ICE","x":3,"y":9},{"type":"ICE","x":1,"y":7},{"type":"LOCK","x":2,"y":3},{"type":"KEY","x":9,"y":5},{"type":"WATER","x":9,"y":4},{"type":"WATER","x":8,"y":4},{"type":"WATER","x":8,"y":5},{"type":"WATER","x":8,"y":6},{"type":"WATER","x":9,"y":6},{"type":"ICE_PICKUP","x":4,"y":9},{"type":"WATER_PICKUP","x":6,"y":4},{"type":"FLOUR","x":3,"y":1},{"type":"FIRE_PICKUP","x":2,"y":1},{"type":"WALL","x":3,"y":8},{"type":"WALL","x":2,"y":8},{"type":"WALL","x":2,"y":7},{"type":"WALL","x":4,"y":8},{"type":"WALL","x":5,"y":8},{"type":"WALL","x":5,"y":9}, ...specialTiles ]
  };
  
  export default level;
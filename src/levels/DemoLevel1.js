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
  
  const level = {
    theme: LEVEL_THEMES.YELLOW,
    tilesWidth: 8,
    tilesHeight: 5,
    placements: [{"type":"HERO","x":5,"y":4},{"type":"GOAL","x":7,"y":5},{"type":"WALL","x":4,"y":4},{"type":"FLOUR","x":3,"y":2},{"type":"FLOUR","x":6,"y":4},{"type":"KEY","x":5,"y":3},{"type":"ICE","x":1,"y":1},{"type":"ICE","x":2,"y":1},{"type":"ICE","x":3,"y":1},{"type":"ICE","x":4,"y":1},{"type":"ICE","x":5,"y":1},{"type":"ICE","x":6,"y":1},{"type":"ICE","x":7,"y":1},{"type":"ICE","x":8,"y":1},{"type":"ICE","x":8,"y":2},{"type":"ICE","x":7,"y":2},{"type":"ICE","x":6,"y":2},{"type":"ICE","x":5,"y":2},{"type":"ICE","x":4,"y":2},{"type":"ICE","x":2,"y":2},{"type":"ICE","x":1,"y":2},{"type":"ICE","x":1,"y":3},{"type":"ICE","x":2,"y":3},{"type":"ICE","x":3,"y":3},{"type":"ICE","x":4,"y":3},{"type":"ICE","x":5,"y":3},{"type":"ICE","x":1,"y":4},{"type":"ICE","x":2,"y":4},{"type":"ICE","x":2,"y":5},{"type":"ICE","x":1,"y":5},{"type":"ICE","x":3,"y":5},{"type":"ICE","x":3,"y":4},{"type":"ICE","x":4,"y":5},{"type":"ICE","x":5,"y":5},{"type":"ICE","x":6,"y":5},{"type":"ICE","x":5,"y":4},{"type":"ICE","x":6,"y":3},{"type":"ICE","x":7,"y":3},{"type":"ICE","x":8,"y":3},{"type":"ICE","x":7,"y":4},{"type":"ICE","x":6,"y":4},{"type":"ICE","x":8,"y":4},{"type":"ICE","x":8,"y":5},{"type":"FLOUR","x":3,"y":2}]
  };
  
  export default level;
 
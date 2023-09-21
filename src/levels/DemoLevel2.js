import {
    LEVEL_THEMES,
    PLACEMENT_TYPE_FLOUR,
    PLACEMENT_TYPE_GOAL,
    PLACEMENT_TYPE_HERO,
    PLACEMENT_TYPE_WALL,
  } from "../helpers/consts";
  
  const level = {
    theme: LEVEL_THEMES.YELLOW,
    tilesWidth: 8,
    tilesHeight: 5,
    placements: [
      {"type":"HERO","x":4,"y":2},{"type":"GOAL","x":7,"y":5},{"type":"WALL","x":4,"y":4},{"type":"FLOUR","x":3,"y":2},{"type":"FLOUR","x":6,"y":4},{"type":"LOCK","x":5,"y":1},{"type":"KEY","x":5,"y":3},{"type":"LOCK","x":5,"y":2},{"type":"LOCK","x":5,"y":4},{"type":"LOCK","x":5,"y":5}
    ],
  };
  
  export default level;
 
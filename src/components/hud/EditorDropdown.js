import {
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
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_TELEPORT,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_THIEF,
  PLACEMENT_TYPE_CIABATTA
  } from "../../helpers/consts";
  import styles from "./EditorDropdown.module.css";
  
  export default function EditorDropdown({ level }) {
    if (!level.enableEditing) {
      return null;
    }
  
    return (
      <div className={styles.dropdownContainer}>
        <select className="tileSelectMenu"
          value={level.editModePlacementType}
          onChange={(event) => {
            level.setEditModePlacementType(event.target.value);
          }}>
          <option value={PLACEMENT_TYPE_FLOUR}>Flour</option>
          <option value={PLACEMENT_TYPE_GOAL}>Goal</option>
          <option value={PLACEMENT_TYPE_HERO}>Hero</option>
          <option value={PLACEMENT_TYPE_WALL}>Wall</option>
          <option value={PLACEMENT_TYPE_LOCK}>Lock</option>
          <option value={PLACEMENT_TYPE_KEY}>Key</option>
          <option value={PLACEMENT_TYPE_CONVEYOR}>Conveyor</option>
          <option value={PLACEMENT_TYPE_WATER}>Water</option>
          <option value={PLACEMENT_TYPE_WATER_PICKUP}>Water Pickup</option>
          <option value={PLACEMENT_TYPE_FIRE}>Fire</option>
          <option value={PLACEMENT_TYPE_FIRE_PICKUP}>Fire Pickup</option>
          <option value={PLACEMENT_TYPE_ICE}>Ice</option>
          <option value={PLACEMENT_TYPE_ICE_PICKUP}>Ice Pickup</option>
          <option value={PLACEMENT_TYPE_SWITCH}>Switch</option>
          <option value={PLACEMENT_TYPE_SWITCH_DOOR}>Door</option>
          <option value={PLACEMENT_TYPE_TELEPORT}>Teleport</option>
          <option value={PLACEMENT_TYPE_GROUND_ENEMY}>Ground Enemy</option>
          <option value={PLACEMENT_TYPE_FLYING_ENEMY}>Flying Enemy</option>
          <option value={PLACEMENT_TYPE_ROAMING_ENEMY}>Roaming Enemy</option>
          <option value={PLACEMENT_TYPE_THIEF}>Thief Enemy</option>
          <option value={PLACEMENT_TYPE_CIABATTA}>Big Boy Ciabatta</option>
        </select>
        <button
          onClick={() => {
            level.copyPlacementsToClipboard();
          }}
        >
          Export
        </button>
      </div>
    );
  }
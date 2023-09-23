import styles from "./TopHud.module.css";
import FlourCount from "./FlourCount";
import ClockCount from "./ClockCount";
import InventoryList from "./InventoryList";
import EditorDropdown from "./EditorDropdown";
import PixelNumber from "../object-graphics/PixelNumber";

export default function TopHud({ level, totalScore, currentLevelScore, togglePause }) {
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        <FlourCount level={level} />
        <ClockCount level={level} />
        <InventoryList level={level} />
        <div className={styles.topHudMiddle}>
          <div style={{ display: "flex", gap: "2px", alignItems: "center"}}>
            Level Score: <PixelNumber number={currentLevelScore} />
          </div>
          <div style={{ display: "flex", gap: "2px", alignItems: "center"}}>
            Total Score: <PixelNumber number={totalScore} />
          </div>
        </div>
      </div>
      <div className={styles.topHudRight}>
      <button onClick={togglePause}>Pause</button>
      {/* <EditorDropdown level={level} /> */}
      </div>
    </div>
  );
}

import styles from "./TopHud.module.css";
import FlourCount from "./FlourCount";
import ClockCount from "./ClockCount";
import InventoryList from "./InventoryList";
import EditorDropdown from "./EditorDropdown";
import PixelNumber from "../object-graphics/PixelNumber";
import PlayIcon from "../../play-button-svgrepo-com.svg"

export default function TopHud({ level, totalScore, currentLevelScore, togglePause, isPaused }) {
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        <FlourCount level={level} />
        <ClockCount level={level} />
        <InventoryList level={level} />
        <div className={styles.topHudMiddle}>
          <div style={{ display: "flex", gap: "2px", alignItems: "center"}}>
            <span className={styles.outlinedText}>Level Score:</span>{" "} <PixelNumber number={currentLevelScore} />
          </div>
          <div style={{ display: "flex", gap: "2px", alignItems: "center"}}>
            <span className={styles.outlinedText}>Total Score:</span><PixelNumber number={totalScore} />
          </div>
        </div>
      </div>
      <div className={styles.topHudRight}>
      <button onClick={togglePause} className={styles.pauseBtn}>{!isPaused ? "| |" : <img src={PlayIcon} height={70}/>}</button>
      {/* <EditorDropdown level={level} /> */}
      </div>
    </div>
  );
}

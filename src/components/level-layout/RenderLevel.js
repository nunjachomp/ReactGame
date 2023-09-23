// RenderLevel.js
import React, { useEffect, useState } from "react";
import styles from "./RenderLevel.module.css";
import { THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { LevelState } from "../../classes/LevelState";
import LevelCompleteMessage from "../hud/LevelCompleteMessage";
import DeathMessage from "../hud/DeathMessage";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import TopHud from "../hud/TopHud";
import  {useTotalScore} from "../../Context/TotalScoreContext"

  export default function RenderLevel() {
    const currentLevelId = useRecoilValue(currentLevelIdAtom);
    const [level, setLevel] = useState(null);
    const [currentLevelScore, setCurrentLevelScore] = useState(0);
    const [isTotalScoreUpdated, setIsTotalScoreUpdated] = useState(false);
  
    // Get the totalScore and updateTotalScore from the context
    const { totalScore, updateTotalScore } = useTotalScore();
  
    useEffect(() => {
      const levelState = new LevelState(currentLevelId, (newState) => {
        setLevel(newState);
        setCurrentLevelScore(newState.levelScore);
      });
  
      setLevel(levelState.getState());

      setIsTotalScoreUpdated(false);
  
      return () => {
        levelState.destroy();
      };
    }, [currentLevelId]);
  
    if (!level) {
      return null;
    }
  
    const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`;
  
    if (level.isCompleted && !isTotalScoreUpdated) {
      console.log("Level completed. Updating total score with:", currentLevelScore);
      updateTotalScore(currentLevelScore);
      setIsTotalScoreUpdated(true)
    }

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <div
          style={{
            transform: cameraTranslate,
          }}
        >
          <LevelBackgroundTilesLayer level={level} />
          <LevelPlacementsLayer level={level} />
        </div>
        {level.isCompleted && (
          <LevelCompleteMessage
            onLevelComplete={() => {
              updateTotalScore(currentLevelScore);
            }}
          />
        )}
        {level.deathOutcome && <DeathMessage level={level} />}
      </div>
      <TopHud level={level} totalScore={totalScore} currentLevelScore={currentLevelScore}/>
    </div>
  );
}

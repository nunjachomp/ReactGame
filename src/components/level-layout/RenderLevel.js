import React, { useEffect, useState, useRef } from "react";
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
import { useTotalScore } from "../../Context/TotalScoreContext";
import PauseMenu from "../PauseMenu/PauseMenu";

export default function RenderLevel() {
  const currentLevelId = useRecoilValue(currentLevelIdAtom);
  const [level, setLevel] = useState(null);
  const [currentLevelScore, setCurrentLevelScore] = useState(0);
  const [isTotalScoreUpdated, setIsTotalScoreUpdated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const levelState = useRef(null);

  const { totalScore, updateTotalScore } = useTotalScore();

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (levelState.current) {
      levelState.current.togglePause();
    }
  };

  useEffect(() => {
    levelState.current = new LevelState(currentLevelId, (newState) => {
      setLevel(newState);
      setCurrentLevelScore(newState.levelScore);  
    });

    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        togglePause();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      if (levelState.current) {
        levelState.current.destroy();
      }
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentLevelId]);

  useEffect(() => {
    if (level && level.isCompleted && !isTotalScoreUpdated) {
      console.log("Level completed. Updating total score with:", currentLevelScore);
      const updatedTotalScore = totalScore + currentLevelScore;
      console.log("Old Total Score:", totalScore);
      console.log("New Total Score:", updatedTotalScore);
      updateTotalScore(currentLevelScore);
      setIsTotalScoreUpdated(true); 
  
      setIsTotalScoreUpdated(false);
    }
  }, [level, currentLevelScore, isTotalScoreUpdated]);
  
  const handleQuit = () => {
    // Maybe handle sign out here?
  };

  if (!level) {
    return null;
  }

  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`;


  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      {isPaused ? (
        <PauseMenu onResume={togglePause} onQuit={handleQuit} />
      ) : (
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
      )}
      <TopHud
        level={level}
        totalScore={totalScore}
        currentLevelScore={currentLevelScore}
        togglePause={togglePause}
        isPaused={isPaused}
      />
    </div>
  );
}

import { useRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import LevelsMap from "../../levels/LevelsMap";
import styles from "./PopupMessage.module.css";
import LevelCompletedSvg from "../object-graphics/LevelCompletedSvg";
import { useKeyPress } from "../../hooks/useKeyPress";
import axios from "axios";

export default function LevelCompleteMessage({totalScore}) {
  const [currentId, setCurrentId] = useRecoilState(currentLevelIdAtom);

  const handleGoToNextLevel = async () => {
    const levelsArray = Object.keys(LevelsMap);
    const currentIndex = levelsArray.findIndex((id) => {
      return id === currentId;
    });
    const nextLevelId = levelsArray[currentIndex + 1] ?? levelsArray[0];

    setCurrentId(nextLevelId);
    localStorage.setItem("currentLevelId", nextLevelId);

    const levelData = {
      levelName: nextLevelId,
      totalScore: totalScore,
    };

    try {
      const response = await axios.post("link", levelData);

      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useKeyPress("Enter", () => {
    handleGoToNextLevel();
  });


    return (
      <div className={styles.outerContainer}>
      <div className={styles.popupContainer}>
        <button className={styles.quietButton} onClick={handleGoToNextLevel}>
          <LevelCompletedSvg />
        </button>
      </div>
    </div>
    );
  }
 
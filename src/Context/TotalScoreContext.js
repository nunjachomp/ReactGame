 // TotalScoreContext.js
import { createContext, useContext, useEffect, useState } from "react";

const TotalScoreContext = createContext();

export const useTotalScore = () => {
  return useContext(TotalScoreContext);
};
export const TotalScoreProvider = ({ children }) => {
    const [totalScore, setTotalScore] = useState(0);
  
    useEffect(() => {
      // Load the total score from local storage or session storage on component mount
      const storedTotalScore = parseInt(localStorage.getItem("totalScore"), 10) || 0;
      setTotalScore(storedTotalScore);
    }, []);
  
    const updateTotalScore = (score) => {
        setTotalScore((prevTotalScore) => {
          const newTotalScore = prevTotalScore + score;
      
          // Store the updated total score in local storage or session storage
          localStorage.setItem("totalScore", newTotalScore);
      
          return newTotalScore;
        });
      };
      
      
  
    return (
      <TotalScoreContext.Provider value={{ totalScore, updateTotalScore }}>
        {children}
      </TotalScoreContext.Provider>
    );
  };
  
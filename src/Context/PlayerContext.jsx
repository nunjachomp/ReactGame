import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const [islogin , setlogin] =useState('')

  return (
    <PlayerContext.Provider value={{islogin }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };
export default PlayerContext;

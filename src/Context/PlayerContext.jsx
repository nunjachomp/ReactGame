import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const [islogin , setlogin] =useState('')
    const { user , getAccessTokenSilently,isAuthenticated  ,logout} = useAuth0();
    const [SessionID, setSessionID] =useState('')

    async function callProtectedAPI (){
      try{
        const token = await getAccessTokenSilently()
        const headers = {
          Authorization: `Bearer ${token}`, // Include the access token
        };
        
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/protectedAPI`, user, {withCredentials: true});
        setSessionID(response.data)

      }
      catch(err){
        console.log(err);
      }
      
    }
    const currentLevelId = localStorage.getItem('currentLevelId');
    const storedTotalScore = parseInt(localStorage.getItem("totalScore"));

    const userData = {
      currentLevelId: currentLevelId,
      totalScore: storedTotalScore
    };

    
    const handleQuit = async () =>{
      try{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/protectedAPI/logout` ,{userData}, {withCredentials: true})
        console.log(response.data)
        logout({ logoutParams: { returnTo: window.location.origin } });
      }
       
      catch(err){
       console.log(err);
      }
      
    }


  return (
    <PlayerContext.Provider value={{callProtectedAPI,isAuthenticated,handleQuit}}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };
export default PlayerContext;

import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const [islogin , setlogin] =useState('')
    const { user , getAccessTokenSilently,isAuthenticated  ,logout} = useAuth0();

    async function callProtectedAPI (){
      try{
        const token = await getAccessTokenSilently()
        const headers = {
          Authorization: `Bearer ${token}`, // Include the access token
        };
        
        const response = await axios.post('http://localhost:8080/protectedAPI', user, {withCredentials: true});
        console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
      
    }
    const handleQuit = async () =>{
      try{
        const response = await axios.post('http://localhost:8080/protectedAPI/logout' ,{withCredentials: true})
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

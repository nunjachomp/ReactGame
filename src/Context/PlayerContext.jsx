import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const { getAccessTokenSilently ,user} = useAuth0();
    const [player, setplayer] = useState({user})

    async function callProtectedAPI (){
      try{
        
        const token = await getAccessTokenSilently()
    
        

          const response = await axios.post('http://localhost:8080/protectedAPI',user)
          console.log(response.data);
        }
        catch(err){
          console.log(err);
        }
      }

  return (
    <PlayerContext.Provider value={{callProtectedAPI }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContextProvider };
export default PlayerContext;

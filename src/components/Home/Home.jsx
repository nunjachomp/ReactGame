import { SPRITE_SHEET_SRC } from "../../helpers/consts";
import React, { useEffect } from "react";
import RenderLevel from "../level-layout/RenderLevel";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from '../../atoms/spriteSheetImageAtom'
import axios from "axios";


function Home() {
    const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
    const { loginWithPopup, isAuthenticated,loginWithRedirect, getAccessTokenSilently } = useAuth0();

    async function callProtectedAPI (){
      try{
        const token = await getAccessTokenSilently()
        console.log(token);
       
        // const response = await axios.get('http://localhost:8080/protectedAPI',{headers: {Authorization:`Bearer ${token}`}})
        
        // console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
      
    }


  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
    callProtectedAPI()
  }, [setSpriteSheetImage]);

  if (!spriteSheetImage) {
    return null;
  }

  return ( 
    <>
  <RenderLevel />
  </>
  );
};

export default Home

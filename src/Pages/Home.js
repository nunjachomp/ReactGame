
import { SPRITE_SHEET_SRC } from "../helpers/consts";
import React, { useContext, useEffect } from "react";
import RenderLevel from "./../components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "../atoms/spriteSheetImageAtom";
import soundsManager from "../classes/Sounds";
import PlayerContext from "../Context/PlayerContext";
 
 soundsManager.init();

const Home = () => {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
  const {callProtectedAPI, isAuthenticated} = useContext(PlayerContext)


  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
    if (isAuthenticated) {
      console.log('Calling callProtectedAPI');
      callProtectedAPI();
    }
  }, [setSpriteSheetImage, isAuthenticated,callProtectedAPI]);

  if (!spriteSheetImage) {
    return null;
  }

  return <RenderLevel />;
};

export default Home;

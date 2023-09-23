import { SPRITE_SHEET_SRC } from "../../helpers/consts";
import React, { useContext, useEffect } from "react";
import RenderLevel from "../level-layout/RenderLevel";

import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from '../../atoms/spriteSheetImageAtom'
import PlayerContext from "../../Context/PlayerContext";



function Home() {
    const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);
    const {callProtectedAPI} = useContext(PlayerContext)
   


  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
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

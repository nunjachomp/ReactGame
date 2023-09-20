import { SPRITE_SHEET_SRC } from "../src/helpers/consts";
import React, { useEffect } from "react";
import RenderLevel from "../src/components/level-layout/RenderLevel";
import { useRecoilState } from "recoil";
import { spriteSheetImageAtom } from "./atoms/spriteSheetImageAtom";
import soundsManager from "./classes/Sounds";
 
 soundsManager.init();

const App = () => {
  const [spriteSheetImage, setSpriteSheetImage] =
    useRecoilState(spriteSheetImageAtom);

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

  return <RenderLevel />;
};

export default App;

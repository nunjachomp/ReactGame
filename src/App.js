import Sprite from './components/object-graphics/Sprite';
import { SPRITE_SHEET_SRC } from '../src/helpers/consts';
import React, { useEffect, useState } from 'react'

const App = () => {

const [spriteSheetImage, setSpriteSheetImage] = useState(null)

useEffect(() => {
  const image = new Image();
  image.src = SPRITE_SHEET_SRC;
  image.onload = () => {
    setSpriteSheetImage(image);
  }
}, [])

if(!spriteSheetImage) {
  return null;
}

  return (
  <div>
    <p>Ciabatta's Revenge</p>
   <Sprite image={spriteSheetImage} frameCoord={"1x0"} />
  </div>
  )
}

export default App
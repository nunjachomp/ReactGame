import React, { useEffect, useRef } from 'react'
import { CELL_SIZE } from '../../helpers/consts';
import { useRecoilValue } from "recoil";
import { spriteSheetImageAtom } from "../../atoms/spriteSheetImageAtom";

function Sprite({ frameCoord, size = 16 }) {
  const spriteSheetImage = useRecoilValue(spriteSheetImageAtom);

  const canvasRef = useRef();

    useEffect(() => {
        const canvasEl = canvasRef.current;
        const ctx = canvasEl.getContext("2d");

        ctx.clearRect(0,0, canvasEl.width, canvasEl.height)

        const tileSheetX = Number(frameCoord.split("x")[0]);
        const tileSheetY = Number(frameCoord.split("x")[1]);

        ctx.drawImage(
            spriteSheetImage,
            tileSheetX * CELL_SIZE,
            tileSheetY * CELL_SIZE,
            size,
            size,
            0,
            0,
            size,
            size
        );

    }, [ spriteSheetImage, frameCoord, size ])

  return (
    <canvas width={size} height={size} ref={canvasRef} />
  )
}

const MemoizedSprite = React.memo(Sprite);
export default MemoizedSprite;
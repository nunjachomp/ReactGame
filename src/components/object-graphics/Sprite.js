import React, { useEffect, useRef } from 'react'
import { CELL_SIZE } from '../../helpers/consts';

const Sprite = ({ image, frameCoord, size = 16 }) => {

    const canvasRef = useRef();

    useEffect(() => {
        const canvasEl = canvasRef.current;
        const ctx = canvasEl.getContext("2d");

        ctx.clearRect(0,0, canvasEl.width, canvasEl.height)

        const tileSheetX = Number(frameCoord.split("x")[0]);
        const tileSheetY = Number(frameCoord.split("x")[1]);

        ctx.drawImage(
            image,
            tileSheetX * CELL_SIZE,
            tileSheetY * CELL_SIZE,
            size,
            size,
            0,
            0,
            size,
            size
        );

    }, [ frameCoord, size ])

  return (
    <canvas width={size} height={size} ref={canvasRef} />
  )
}

export default Sprite
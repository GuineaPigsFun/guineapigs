/*
 * @Date         : 2024-12-17 21:20:35
 * @LastEditTime : 2024-12-19 00:27:33
 * @FilePath     : /src/components/zoomImageCropper.tsx
 * @Description  : 
 * 
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved. 
 */
import React, { useRef, useEffect } from "react";

interface Coordinate {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageCanvasProps {
  imageSrc: string;
  coordinates: Coordinate[];
  width: number;
  height: number;
  handleClick: (value: boolean) => void  ;
}

const ZoomImageCropper: React.FC<ImageCanvasProps> = ({
  imageSrc,
  coordinates,
  width,
  height,
  handleClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const bottomCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // const bottomCanvas = bottomCanvasRef.current;
    const canvas = canvasRef.current;

    if (canvas) {
      // const bottomCtx = bottomCanvas.getContext('2d') as CanvasRenderingContext2D
      const ctx = canvas.getContext("2d");

      if(!ctx) return

      // set canvas size
      canvas.width = width;
      canvas.height = height;

      const image = new Image();

      image.src = imageSrc

      image.onload = () => {
        coordinates.forEach((coord) => {
          console.log('image.width:', image.width)
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = coord.width
          tempCanvas.height = coord.height
          
          const tempCtx = tempCanvas.getContext('2d');
          if (!tempCtx) return;

          tempCtx.drawImage(image, coord.x, coord.y, coord.width, coord.height, 0, 0, coord.width, coord.height);

          ctx.drawImage(tempCanvas, coord.x, coord.y);
        });
      }
    }
  }, [imageSrc, coordinates, width, height]);

  return (
    <div
      className="fixed top-0 left-0 min-w-full min-h-full flex items-center cursor-pointer justify-center z-50"
      style={{backgroundColor: 'rgba(83, 83, 83, 0.6)'}}
      onClick={() => {handleClick(false)}}
    >
      <div
        className="relative"
        style={{
          border: "1px solid #808080",
          display: "inline-block",
          pointerEvents: "none"
        }}
      >
        <div
          className="w-[715px] h-[715px]"
          style={{backgroundColor: 'rgba(83, 83, 83, 0.3)', border: '1px #808080'}}></div>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 200
          }}
        />
      </div>
    </div>
  );
};

export default ZoomImageCropper;

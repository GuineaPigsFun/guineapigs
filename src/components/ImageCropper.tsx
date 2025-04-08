import React, { useRef, useEffect } from "react";
import Image from "next/image";

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
  isList?: boolean;
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({
  imageSrc,
  coordinates,
  width,
  height,
  isList,
}) => {
  const topCanvasRef = useRef<HTMLCanvasElement | null>(null);
  // const bottomCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // const bottomCanvas = bottomCanvasRef.current;
    const topCanvas = topCanvasRef.current;

    if (topCanvas) {

      // canvas standard size
      const standardWidth = 348;
      const standardHeight = 348;

      // Ratio
      const widthRatio = width / standardWidth;
      const heightRatio = height / standardHeight;
      // const bottomCtx = bottomCanvas.getContext('2d') as CanvasRenderingContext2D
      const topCtx = topCanvas.getContext("2d") as CanvasRenderingContext2D;

      // set canvas size
      topCanvas.width = width;
      topCanvas.height = height;
      // fill with black
      topCtx.fillStyle = "black";
      topCtx.fillRect(0, 0, width, height);

      // clear the area of the coordinates
      coordinates.forEach((coord) => {
        topCtx.clearRect(coord.x  * widthRatio, coord.y * heightRatio, coord.width * widthRatio, coord.height * widthRatio);
      });
    }
  }, [imageSrc, coordinates, width, height]);

  return isList ? (
    <div
      className="relative rounded-md"
      style={{ border: "1px solid #808080", display: "inline-block" }}
    >
      <Image
        src={imageSrc}
        alt={"sad"}
        width={width}
        height={height}
        className="rounded-md"
      />
      <canvas
        ref={topCanvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          borderRadius: "4px",
        }}
      />
    </div>
  ) : (
    <div
      className="relative rounded-t-lg cursor-pointer"
      style={{
        border: "1px solid #FF1B81",
        borderBottom: "none",
        display: "inline-block",
      }}
    >
      <Image
        src={imageSrc}
        alt={"sad"}
        width={width}
        height={height}
        className="rounded-lg"
      />
      <canvas
        ref={topCanvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          borderRadius: "6px",
        }}
      />
    </div>
  );
};

export default ImageCanvas;

/*
 * @Date         : 2024-12-16 23:53:02
 * @LastEditTime : 2024-12-17 23:59:29
 * @FilePath     : /src/components/imageList/largeImageList.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";
import ImageCanvas from "@/components/ImageCropper";
import Image from "next/image";
import Lock from "@/assets/img/Lock.png";
import ZoomImageCropper from "../zoomImageCropper";

type Coordinate = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ImgList = {
  url: string;
  coordinates: Coordinate[];
};

interface imgListInterface {
  imgList: ImgList[];
}

const LargeImageList: React.FC<imgListInterface> = ({ imgList }) => {
  const [isShowZoom, setIsShowZoom] = React.useState<boolean>(false)
  const [coordinates, setCoordinates] = React.useState<Coordinate[]>([])
  const [imgUrl, setImgUrl] = React.useState<string>('')

  const renderImageZoom = () => {
    return isShowZoom ? 
      <ZoomImageCropper
        imageSrc={imgUrl}
        coordinates={coordinates}
        width={715}
        height={715}
        handleClick={(value) => {setIsShowZoom(value)}}
      /> : <></>
  }

  const handleImage = (item: ImgList) => {
    setCoordinates(item.coordinates)
    setImgUrl(item.url)

    setIsShowZoom(true)
  }

  return (
    <div>
      {renderImageZoom()}
      <div className="flex justify-start items-center mt-[32px]">
        {imgList.map((item, index) => {
          return (
            <div key={index} className="mr-[12px] flex flex-col">
              <div className="h-[349px]" onClick={() => { handleImage(item) }}>
                <ImageCanvas
                  imageSrc={item.url}
                  coordinates={item.coordinates}
                  width={348}
                  height={348}
                />
              </div>
              <div className="pl-4 pr-4 pt-[12px] pb-[12px] flex flex-col justify-between bg-[#FF1B81] rounded-b-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[16px]">#3086</span>
                  <Image src={Lock} alt="Lock" width={36} height={36} />
                  <span className="text-black rounded-lg bg-[#E6FF00] pl-4 pr-4 h-[36px] flex items-center">
                    3289
                  </span>
                </div>
                <div className="text-[#FAFAFA] mt-[12px] text-[16px]">
                  <span>140</span>
                  <span>/</span>
                  <span>10000</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LargeImageList;

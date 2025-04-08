/*
 * @Date         : 2024-12-17 00:00:07
 * @LastEditTime : 2024-12-18 00:04:48
 * @FilePath     : /src/components/imageList/smallImageList.tsx
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

const SmallImageList: React.FC<imgListInterface> = ({ imgList }) => {
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
            <div key={index} className="mr-[8px] flex flex-col">
              <div className="h-[136]" onClick={() => {handleImage(item)}}>
                <ImageCanvas
                  imageSrc={item.url}
                  coordinates={item.coordinates}
                  width={135}
                  height={135}
                />
              </div>
              <div className="px-2 py-1 flex flex-col justify-between bg-[#FF1B81] rounded-b-lg">
                <div className="flex justify-between item s-center">
                  <span className="font-bold text-[12px]">#3086</span>
                  <Image src={Lock} alt="Lock" width={20} height={20} />
                  <span className="text-black text-[12px] rounded-sm bg-[#E6FF00] px-2 h-[16px] flex items-center">
                    3289
                  </span>
                </div>
                <div className="text-[#FAFAFA] mt-[6px] text-[12px]">
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

export default SmallImageList;

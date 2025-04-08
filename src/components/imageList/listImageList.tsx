/*
 * @Date         : 2024-12-17 00:14:46
 * @LastEditTime : 2024-12-18 00:01:09
 * @FilePath     : /src/components/imageList/listImageList.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";
import ImageCanvas from "@/components/ImageCropper";
import Image from "next/image";
import Lock from "@/assets/img/Lock.png"
import ZoomImageCropper from "../zoomImageCropper";;

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

const ListImageList: React.FC<imgListInterface> = ({ imgList }) => {
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
      <div className="mt-[32px] text-[16px]">
        <ul>
          <li className="flex justify-between items-center mb-4 font-bold">
            <div className="w-[80px] text-left">Item</div>
            <div className="w-[80px] text-center">ID</div>
            <div className="w-[80px] text-center">Status</div>
            <div className="w-[80px] text-center">Rarity</div>
            <div className="w-[80px] text-center">Lock</div>
          </li>
          {imgList.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-between items-center mb-4 border-t-[#292929]"
              >
                <div className="w-[80px] flex items-center" onClick={() => { handleImage(item) }}>
                  <ImageCanvas
                    imageSrc={item.url}
                    coordinates={item.coordinates}
                    width={44}
                    height={44}
                    isList
                  />
                </div>
                <div className="w-[80px] flex justify-center">
                  <span className="text-black text-[16px] rounded-md bg-[#E6FF00] w-[68px] h-[32px] flex items-center justify-center">
                    3289
                  </span>
                </div>
                <div className="w-[80px] text-center">
                  <div className="text-[16px]">
                    <span>140</span>
                    <span>/</span>
                    <span>10000</span>
                  </div>
                </div>
                <div className="w-[80px] flex justify-center">
                  <span className="text-[16px] rounded-md bg-[#FF1B81] w-[68px] h-[32px] flex items-center justify-center">
                    3578
                  </span>
                </div>
                <div className="w-[80px] flex justify-center">
                  <Image src={Lock} alt="Lock" width={24} height={24} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListImageList;

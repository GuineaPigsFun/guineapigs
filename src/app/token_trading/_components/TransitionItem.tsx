import React from "react";
import Image from "next/image";

import Img_Avator from "@/assets/img/avator.png";
export const TransitionItem: React.FC = () => {
  return (
    <div className="h-[61px] bg-[#2F3039] p-1 w-[100%]">
      <div className="flex gap-2 items-center">
        <Image
          width={20}
          height={20}
          src={Img_Avator}
          alt="Avator"
          className="rounded-xl"
        />
        <button className="min-w-15 min-h-5 bg-[#E787BE] text-center text-xs px-2 py-1 text-black rounded-sm">
          ChoVWg
        </button>
        <span className="text-xs text-[#909AAD]">12/08/2024</span>
        <button className="min-w-10 min-h-5  text-center text-xs px-2 py-1 rounded-md border-2 border-[#909AAD]">
          reply
        </button>
      </div>
      <p className="text-xs py-2">
        You’d see better results if you promoted like this. Hit me up, and I’ll
        show you how.
      </p>
    </div>
  );
};

/*
 * @Date         : 2024-12-10 23:16:46
 * @LastEditTime : 2024-12-15 21:27:22
 * @FilePath     : /src/app/token_trading/page.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";
import Image from "next/image";
import header from "@/assets/img/header.png";
import { Holders } from "./_components/Holders";
// import { Transition } from "./_components/Transition";

export default function TokenTrading() {
  return (
    <section className="w-[90%] mx-auto text-white">
      <div className="mb-4 flex items-center">
        <Image
          src={header}
          className="ml-16"
          alt="header"
          width={57}
          height={57}
        />
        <div className="ml-[8px]">
          <div className="flex items-center mb-[12px]">
            <span className="text-[20px]">Guinea Pigs</span>
            <div className="text-[16px] ml-[12px]">
              <span>By</span>
              <span className="ml-[4px] mr-[4px] inline-block bg-[#F64198] pl-[6px] pr-[6px] rounded-lg text-black">
                Animal Labs
              </span>
              <span>about 1 month ago</span>
            </div>
          </div>
          <div className="text-[16px]">
            <span className="text-[#979797] mr-[16px]">Charts</span>
            <span className="text-[#5582EE]">MarketCap: </span>
            <span className="text-[#5582EE]">$16,940,438,903</span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-start justify-between">
        <div className="flex-1 basis-auto">
          <div className="w-[100%]  h-[50vh]">
            <iframe
              height="100%"
              width="100%"
              id="geckoterminal-embed"
              title="GeckoTerminal Embed"
              src="https://www.geckoterminal.com/solana/pools/5xRb8Mth5PUG4sQRXEHm7SC9UkwhfVXLDVtKf2AXq23k?embed=1&info=0&swaps=0&grayscale=0&light_chart=0"
              allow="clipboard-write"
            />
          </div>
          {/* <Transition /> */}
        </div>

        <div className="w-[341px] shrink-0  ml-4">
          <button className="mb-6 min-w-full h-10 rounded-md leading-10  text-white  text-center bg-[#5582EE]">
            Trade on uniswap via GP
          </button>
          <p className="text-center">CA:</p>
          <button className="text-wrap break-words min-w-full rounded-md  w-[100%] p-2   border-2 border-[#BEBEBE]">
            GJAFwWjJ3vnTsrQVabjBVK2TYB1YtRCQXRDfDgUnpump
          </button>
          <div className="px-2 py-3 mt-6 bg-[#2F3039] w-[100%]  rounded-md">
            <div className="flex  w-[100%] justify-between  gap-3 ">
              <button className="flex-1 bg-[#5DEB6E] min-h-9  rounded-md  text-black">
                buy
              </button>
              <button className="flex-1 bg-[#1C1D27]  rounded-md  text-[#A3A3A3] min-h-9">
                sell
              </button>
            </div>
            <div className="flex justify-end mt-2 mb-1">
              <button className=" bg-[#1E1E1E] p-1   text-xs rounded-md  text-[#B7B7B7] min-h-7">
                set slipege
              </button>
            </div>
            <div className="border-2 w-[100%] h-[37px] flex rounded-md items-center border-[#BEBEBE] p-2 gap-1">
              <input
                type="text"
                placeholder="0.0"
                className="flex-1 outline-none bg-transparent "
              />
              <span>MON</span>
            </div>
            <div className="flex justify-start gap-2 mt-2 mb-1">
              <button className=" bg-[#1E1E1E] py-1 px-2  text-xs rounded-md  text-[#B7B7B7] min-h-4">
                reset
              </button>
              <button className=" bg-[#1E1E1E] py-1 px-2    text-xs rounded-md  text-[#B7B7B7] min-h-4">
                1 ETH
              </button>
              <button className=" bg-[#1E1E1E] py-1 px-2    text-xs rounded-md  text-[#B7B7B7] min-h-4">
                2 ETH
              </button>
              <button className=" bg-[#1E1E1E] py-1 px-2   text-xs rounded-md  text-[#B7B7B7] min-h-4">
                5 ETH
              </button>
            </div>
            <button className="w-[100%] bg-[#5DEB6E] h-[37px] mt-4 rounded-md text-black text-center">
              swap
            </button>
          </div>
          <Holders />
        </div>
      </div>
    </section>
  );
}

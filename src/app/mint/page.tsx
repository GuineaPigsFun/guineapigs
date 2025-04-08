/*
 * @Date         : 2024-12-10 22:59:26
 * @LastEditTime : 2024-12-24 00:22:11
 * @FilePath     : /src/app/Mint/page.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";
import { useState } from "react";
import Dutch from "@/assets/img/Dutch.png";
import Image from "next/image";
import { ConnectKitButton } from "connectkit";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { contractABI, contractAddress } from "@/contract";

export default function Mint() {
  const { data: txHash, writeContract, isPending } = useWriteContract();
  const { isLoading } = useWaitForTransactionReceipt({
    hash: txHash,
  });
  const [mintValue, setMintValue] = useState<number>(10000);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const value = Number(e.target.value);
    setMintValue(value);
  };

  const addStep = () => {
    const number = mintValue + 1;
    setMintValue(number);
  };

  const reduceStep = () => {
    let number = 0;
    if (mintValue >= 1) {
      number = mintValue - 1;
    } else {
      number = 0;
    }

    setMintValue(number);
  };

  const mint = () => {
    writeContract({
      address: contractAddress,
      abi: contractABI,
      functionName: "mintToken",
      args: [BigInt(mintValue)],
    });
  };

  return (
    <div className="pt-12">
      <div className="text-center flex flex-col items-center mt-2">
        <span className="text-[30px] text-textColor font-bold mb-4">
          Pump your NFTs like pumping memecoins
        </span>
        <span className="text-lg text-[#B5B5B5] w-[56%] leading-5">
          You will receive random tokens and fragments from this mint; however,
          you can only mint 10,000 or more tokens per mint. After the completion
          of our mint, you will be able to trade your tokens in any amount you
          wish.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-full">
          <Image src={Dutch} alt="Dutch" width={408} height={408} />
        </div>
        <div className="mt-12 flex">
          <div className="flex items-center justify-start bg-[#FF1B81] p-[1px] rounded-l-md rounded-r-md">
            <input
              type="text"
              className="border-none rounded-l-md bg-background w-[80px] outline-none pl-4 pr-4 h-[48px] text-white"
              value={mintValue}
              onChange={handleChange}
            />
            <div className="text-[26px] w-[36px] flex flex-col leading-5 text-center right-0 top-0">
              <span
                className="cursor-pointer select-none text-white"
                onClick={() => {
                  addStep();
                }}
              >
                +
              </span>
              <span
                className="cursor-pointer select-none text-white"
                onClick={() => {
                  reduceStep();
                }}
              >
                -
              </span>
            </div>
          </div>
          <div className="ml-4">
            <ConnectKitButton.Custom>
              {({ isConnected, isConnecting, show }) => {
                return isConnected ? (
                  <button
                    style={{ width: "104px" }}
                    onClick={mint}
                    disabled={isPending || isLoading}
                    className="h-[50px] rounded-md bg-[#E5FF00] text-black disabled:bg-[#e5ff0095] disabled:cursor-not-allowed"
                  >
                    Mint
                  </button>
                ) : (
                  <button
                    style={{ width: "104px" }}
                    onClick={show}
                    className="bg-[#E5FF00] text-black h-[50px] rounded-md"
                  >
                    {isConnecting ? "isConnecting" : "connect"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        </div>
      </div>
    </div>
  );
}

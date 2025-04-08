/*
 * @Date         : 2024-12-08 21:11:49
 * @LastEditTime : 2024-12-22 22:57:59
 * @FilePath     : /src/components/header/index.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";
import { FC, useState } from "react";
import Image from "next/image";
import LogoImg from "@/assets/img/Logo1.png";
import GuineaPigs from "@/assets/img/GuineaPigs.png";
import x from "@/assets/img/X.png";
import discord from "@/assets/img/discord.png";
import Link from "next/link";
import { ConnectButton } from "./connectButton";

export const Header: FC = () => {
  const [activted, setActived] = useState<number>(1);
  const handleClick = (value: number) => {
    setActived(value);
  };

  return (
    <div className="flex items-center justify-between min-w-full pl-4 pr-4">
      <div className="img mr-6">
        <Link href="/">
          <div className="flex justify-items-start items-center">
            <Image src={LogoImg} alt="logo" width={114} height={114} />
            <Image src={GuineaPigs} alt="GuineaPigs" width={178} height={38} />
          </div>
        </Link>
      </div>
      <div className="bg-[#232323] rounded-md items-center flex h-[42px] mr-6 text-[#929292]">
        <Link
          onClick={() => {
            handleClick(1);
          }}
          href={"/mint"}
          className={[
            activted === 1 ? "bg-[#E5FF00] text-black" : "",
            "rounded-l-md px-7 h-[42px] flex items-center",
          ].join(" ")}
        >
          <span>Mint</span>
        </Link>
        <Link
          onClick={() => {
            handleClick(2);
          }}
          href={"/token_trading"}
          className={[
            activted === 2 ? "bg-[#E5FF00] text-black" : "",
            "whitespace-nowrap px-7 h-[42px] flex items-center",
          ].join(" ")}
        >
          <span className="inline-block w-1/1">Token trading</span>
        </Link>
        <Link
          onClick={() => {
            handleClick(3);
          }}
          href={"/fragment"}
          className={[
            activted === 3 ? "bg-[#E5FF00] text-black" : "",
            "rounded-r-md px-7 h-[42px] flex items-center",
          ].join(" ")}
        >
          <span>Fragments</span>
        </Link>
      </div>
      <div className="flex items-center mr-6">
        <a href="https://discord.com/invite/SJCY8s5yeG" target="_blank">
          <Image
            src={discord}
            className="mr-6 cursor-pointer"
            alt="GuineaPigs"
            width={28}
            height={28}
          />
        </a>
        <a href="https://x.com/GuineaPigsFun" target="_blank">
          <Image
            src={x}
            alt="GuineaPigs"
            className="cursor-pointer"
            width={32}
            height={32}
          />
        </a>
      </div>
      <ConnectButton />
    </div>
  );
};

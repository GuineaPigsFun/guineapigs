/*
 * @Date         : 2024-12-22 22:46:15
 * @LastEditTime : 2024-12-24 00:26:36
 * @FilePath     : /src/components/header/connectButton.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";
import { shortenAddress } from "@/utils";
import { ConnectKitButton } from "connectkit";

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, address }) => {
        return isConnected ? (
          <button
            style={{ width: "130px" }}
            onClick={show}
            className="h-[42px] overflow-hidden text-ellipsis line-clamp-1 rounded-md bg-[#232323] text-white"
          >
            {shortenAddress(address as string)}
          </button>
        ) : (
          <button
            style={{ width: "130px" }}
            onClick={show}
            className="h-[42px] px-[12px] box-border rounded-md bg-[#E6FF00] text-black"
          >
            {isConnecting ? "isConnecting" : "connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

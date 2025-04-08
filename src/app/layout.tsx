/*
 * @Date         : 2024-12-07 20:22:22
 * @LastEditTime : 2024-12-10 22:29:45
 * @FilePath     : /src/app/layout.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/index";
import React, { Suspense } from "react";
import { Web3Provider } from "@/components/header/Web3Provider";

export const metadata: Metadata = {
  title: "Guinea Pigs",
  description:
    "This is a Guinea Pigs where you can pump your NFTs like pumping memecoins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Suspense>
          <Web3Provider>
            <React.Fragment>
              <div className="background w-screen h-28 flex items-center justify-between">
                <Header />
              </div>
              {children}
            </React.Fragment>
          </Web3Provider>
        </Suspense>
      </body>
    </html>
  );
}

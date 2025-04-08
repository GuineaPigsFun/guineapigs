/*
 * @Date         : 2024-12-11 21:37:49
 * @LastEditTime : 2024-12-15 22:00:41
 * @FilePath     : /src/app/fragment/page.tsx
 * @Description  :
 *
 * Copyright (c) 2024 by Jay@lang, All Rights Reserved.
 */
"use client";

import * as React from "react";

const tabs = ["marketplace", "profile", "NFT mint", "leaderboard"];

const CommingSoon = () => {
  return (
    <div className="text-white pt-64 text-center">
      <h1 className="text-3xl mb-12">Coming soon</h1>
      <p className="text-md">
        You will be able to p2p trading your fragments here when it goes live
      </p>
    </div>
  );
};
export default function Fragments() {
  const [activeTab, setActiveTab] = React.useState<string>("marketplace");

  const renderTabContent = (tab: string) => {
    switch (tab) {
      case "leaderboard":
        return <CommingSoon />;
      case "NFT mint":
        return <CommingSoon />;
      case "profile":
        return <CommingSoon />;
      case "marketplace":
        return <CommingSoon />;
    }
  };

  return (
    <section className="text-[#848484] text-md">
      <ul className="w-[90%] mx-auto flex divide-x cursor-pointer">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={activeTab == tab ? "text-white px-12" : "px-12"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </li>
        ))}
      </ul>
      {renderTabContent(activeTab)}
    </section>
  );
}

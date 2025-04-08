import React from "react";
import { TransitionItem } from "./TransitionItem";

const Transition: React.FC = () => {
  return (
    <div className="min-w-full mt-5">
      <header className="flex gap-2 flex-wrap">
        <button className="px-2  bg-[#E5FF00] rounded-md text-black">
          chat room
        </button>
        <button className="px-2  text-[#929292]">trades</button>
        <input
          type="text"
          placeholder="type here"
          className="w-[100%] mt-1 outline-none px-2 py-1 bg-[#141414] h-[38px] border-[#545454] border-2 rounded-xl"
        />
      </header>
      <div className="w-[100%] flex flex-col gap-2 mt-4">
        {new Array(20).fill(1).map((_, index) => (
          <TransitionItem key={index} />
        ))}
      </div>
    </div>
  );
};

export { Transition };

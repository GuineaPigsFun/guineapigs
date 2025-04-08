import React from "react";

const Holders: React.FC = () => {
  return (
    <div className="w-[100%] mt-4 mb-2">
      <h3 className="py-3 font-bold">holders</h3>
      <div className="flex flex-col max-w-full gap-2">
        {new Array(10)
          .fill({ title: "so389er", sort: "38.25%" })
          .map((item, index) => (
            <div key={index} className="inline-flex w-[100%] justify-between">
              <span>
                {index}. &nbsp;
                {item.title}
              </span>
              <span>{item.sort}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Holders };

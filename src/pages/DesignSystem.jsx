import React from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import classNames from "classnames";

const DesignSystem = () => {
  const colorPallete = [
    {
      name: "primary-light",
      color: "#65e9e4",
    },
    {
      name: "primary-dark",
      color: "#31c3bd",
    },
    {
      name: "secondary-light",
      color: "#ffc860",
    },
    {
      name: "secondary-dark",
      color: "#f2b137",
    },
    {
      name: "dark-0",
      color: "#1a2a33",
    },
    {
      name: "dark-1",
      color: "#1f3641",
    },
    {
      name: "light-0",
      color: "#a8bfc9",
    },
    {
      name: "light-1",
      color: "#dbe8ed",
    },
  ];
  return (
    <div className="max-w-[80%] m-auto">
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center gap-2">
          <ImCross className="text-primary-dark h-8 w-8" />
          <BsRecordCircleFill className="text-secondary-dark h-8 w-8" />
        </div>
        <span className="text-light-0 font-bold text-base">Design system</span>
      </div>
      <div className="mt-20">
        <h2 className="flex gap-6 items-center ">
          <span className="text-light-0 ">01</span>
          <span className="text-light-1 font-medium text-heading-md">
            Colors
          </span>
        </h2>
        <div className="flex flex-1 justify-between flex-wrap gap-8 mt-8">
          {colorPallete.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "text-light-1 w-[255px] h-[80px] border",
                `bg-${item.name}`,
                "flex flex-col items-center justify-center text-heading-sm font-medium"
              )}
            >
              <span>{item.name}</span>
              <span>{item.color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;

import React from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";

const Box = ({ onClick = () => {}, player = null }) => {
  return (
    <div
      className="flex flex-1 px-8 py-8 justify-center items-center bg-dark-1 rounded-2xl shadow-dark cursor-pointer"
      onClick={onClick}
    >
      {player === null ? (
        <div className="h-8 w-8" />
      ) : player === "X" ? (
        <ImCross className="text-primary-dark h-8 w-8" />
      ) : (
        <BsRecordCircleFill className="text-secondary-dark h-8 w-8" />
      )}
    </div>
  );
};

export default Box;

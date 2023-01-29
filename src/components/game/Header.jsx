import React from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import { IoReloadSharp } from "react-icons/io5";

const Header = ({setOpen}) => {

  return (
    <div className="flex flex-1 items-center justify-between ">
      <div className="flex m-2 gap-2 justify-center items-center">
        <ImCross className="text-primary-dark " />
        <BsRecordCircleFill className="text-secondary-dark " />
      </div>
      <div className="flex gap-2 items-center bg-dark-1 rounded-lg py-3 p-7 shadow-dark -translate-x-3">
        <ImCross className="text-light-0 h-4 w-4" />
        <span className="text-light-0 font-medium">TURN</span>
      </div>
      <div className="bg-light-0 p-2 rounded-lg cursor-pointer "
      onClick={() => setOpen(true)}
      >
        <IoReloadSharp className="text-dark-0" />
      </div>
    </div>
  );
};

export default Header;

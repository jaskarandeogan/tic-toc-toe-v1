import React from "react";
import { FaBeer } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import Button from "../components/shared/Button";

const Playground = () => {
  return (
    <div className="lg:max-w-xl m-auto">
      <h1 className="text-light-1 text-heading-lg">Component Playground</h1>
      <div>
        <h2 className="text-heading-md text-light-1"> Icons</h2>
        <div className="flex text-light-1 gap-2 items-center">
          Lets go for a <FaBeer className="text-light-1 " />?
        </div>
        <div className=" text-light-0 flex  gap-2 items-center mt-2">
          Cross <ImCross className="text-light-1 " />
          Oval <BsRecordCircleFill className="text-light-1 " />
        </div>
       <div className=" flex gap-2 ">
       <Button type="primary-light" size="md" onClick={() => {}}>
          New Game
        </Button>
        <Button type="primary-dark" size="md" onClick={() => {}}>
          New Game
        </Button>
        <Button type="secondary-light" size="md" onClick={() => {}}>
          New Game
        </Button>
        <Button type="secondary-dark" size="md" onClick={() => {}}>
          New Game
        </Button>
       </div>
      </div>
    </div>
  );
};

export default Playground;

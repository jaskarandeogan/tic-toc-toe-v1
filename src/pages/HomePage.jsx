import React from "react";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import Button from "../components/shared/Button";
import classNames from "classnames";

const HomePage = () => {
  const [selectedMark, setSelectedMark] = React.useState("cross");

  function handleSelectedPlayerMark(mark) {
    setSelectedMark(mark);
  }

  return (
    <div className="flex h-screen flex-col items-center  justify-center  ">
      <div className="flex flex-col w-[460px] md:w-md gap-y-10 mt-4 ">
        <div className="flex m-2 gap-2 justify-center items-center">
          <ImCross className="text-primary-dark h-8 w-8" />
          <BsRecordCircleFill className="text-secondary-dark h-8 w-8" />
        </div>
        <div className="bg-dark-1 text-heading-sm font-medium rounded-2xl shadow-dark p-6">
          <span className="flex justify-center text-light-1  ">
            PICK PLAYER 1’S MARK
          </span>
          <div className="bg-dark-0 mt-6 rounded-lg items-center flex p-2 gap-3">
            <div
              className={classNames(
                " flex-1 p-2 rounded-lg flex justify-center",
                selectedMark === "cross" ? "bg-light-0" : "bg-dark-0",
                "transition duration-500 ease-in-out transform ",
                "hover:cursor-pointer"
              )}
              onClick={() => handleSelectedPlayerMark("cross")}
            >
              <ImCross
                className={classNames(
                  " h-5 w-5",
                  selectedMark === "cross" ? "text-dark-0" : "text-light-0",
                  "transition duration-500 ease-in-out transform"
                )}
              />
            </div>
            <div
              className={classNames(
                " flex-1 p-2 rounded-lg flex justify-center",
                selectedMark === "circle" ? "bg-light-0" : "bg-dark-0",
                "transition duration-500 ease-in-out transform ",
                "hover:cursor-pointer"
              )}
              onClick={() => handleSelectedPlayerMark("circle")}
            >
              <BsRecordCircleFill
                className={classNames(
                  " h-5 w-5 ",
                  selectedMark === "circle" ? "text-dark-0" : "text-light-0",
                  "transition duration-500 ease-in-out transform "
                )}
              />
            </div>
          </div>
          <h4 className="text-body-sm font-medium text-light-0 flex justify-center mt-4">
            REMEMBER : {selectedMark === "cross" ? "X" : "0" } GOES FIRST
          </h4>
        </div>
        <div className="flex flex-col gap-5">
          {/* button container */}
          <div className="">
            <Button type="secondary-dark" className={classNames("w-full justify-center rounded-2xl pt-4 pb-6 shadow-primary ")}>
              NEW GAME (VS CPU)
            </Button>
          </div>
          <div className="">
            <Button type="primary-dark" className={classNames("w-full justify-center rounded-2xl pt-4 pb-6 shadow-secondary")}>
              NEW GAME (VS PLAYER)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

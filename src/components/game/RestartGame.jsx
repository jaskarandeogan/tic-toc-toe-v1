import React from "react";
import classNames from "classnames";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import Button from "../shared/Button";

const RestartGame = ({  setOpen }) => {
  function handleCancel() {
    setOpen(false);
  }

  function handleRestart() {
    setOpen(false);
    window.location.reload();
  }
  return (
    <div className="w-full bg-dark-1 py-11">
      <div className="flex flex-col items-center justify-center">
        <span className="text-light-0 font-bold text-heading-md">
          
          RESTART GAME?
        </span>
        <div className="flex gap-2 items-center justify-center mt-6">
          <Button
            type="secondary-light"
            className={classNames(
              "w-full justify-center rounded-lg  shadow-primary"
            )}
            onClick={handleCancel}
          >
            NO, CANCEL
          </Button>
          <Button
            type="primary-light"
            className={classNames(
              "w-full justify-center rounded-lg  shadow-secondary whitespace-nowrap "
            )}
            onClick={handleRestart}
          >
            YES, RESTART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestartGame;

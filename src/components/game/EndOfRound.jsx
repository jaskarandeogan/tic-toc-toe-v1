import React from "react";
import classNames from "classnames";
import { ImCross } from "react-icons/im";
import { BsRecordCircleFill } from "react-icons/bs";
import Button from "../shared/Button";

const EndOfRound = ({ result = "win", player = "circle", setOpen }) => {
  function handleQuit() {
    setOpen(false);
  }

  function handleNextRound() {
    setOpen(false);
  }
  return (
    <div className="w-full bg-dark-1 py-11">
      <div className="flex flex-col items-center justify-center">
        <span className="text-light-0">
          {result === "win"
            ? "YOU WON!"
            : result === "lose"
            ? "OH NO, YOU LOST.."
            : "Tie"}
        </span>
        <span
          className={classNames(
            "flex gap-2 items-center text-heading-lg font-bold",
            player === "cross" ? "text-primary-dark" : "text-secondary-dark"
          )}
        >
          {player === "cross" ? (
            <ImCross className="text-primary-dark h-8 w-8" />
          ) : (
            <BsRecordCircleFill className="text-secondary-dark h-8 w-8" />
          )}
          TAKES THE ROUND
        </span>
        <div className="flex gap-2 items-center justify-center mt-6">
          <Button
            type="secondary-light"
            className={classNames(
              "w-full justify-center rounded-lg  shadow-primary "
            )}
            onClick={handleQuit}
          >
            QUIT
          </Button>
          <Button
            type="primary-light"
            className={classNames(
              "w-full justify-center rounded-lg  shadow-secondary whitespace-nowrap "
            )}
            onClick={handleNextRound}
          >
            NEXT ROUND
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EndOfRound;

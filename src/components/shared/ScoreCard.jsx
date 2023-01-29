import React from "react";
import classNames from "classnames";

const ScoreCard = ({
  children,
  className = "",
  label = "X",
  player1 = "YOU",
  ...props
}) => {
  return (
    <div
      className={classNames(
        "py-1 rounded-lg flex flex-col itenms-center flex-1",
        className
      )}
    >
      <span className="flex justify-center text-body-sm text-dark-0 font-bold">
        <span>{label}</span>
        {player1 && <span>({player1})</span>}
      </span>
      <h4 className="flex justify-center text-dark-0 font-bold text-heading-md">
        {children}
      </h4>
    </div>
  );
};

export default ScoreCard;

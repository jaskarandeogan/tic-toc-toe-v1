import React from "react";
import ScoreCard from "../shared/ScoreCard";

const Scores = () => {
  return (
    <div className="flex flex-1 gap-5">
      <ScoreCard className={"bg-primary-dark"}>14</ScoreCard>
      <ScoreCard className={"bg-secondary-dark"} player1={null} label={"TIES"}>
        14
      </ScoreCard>
      <ScoreCard className={"bg-light-0"} player1={"CPU"} label={"O"}>
        14
      </ScoreCard>
    </div>
  );
};

export default Scores;

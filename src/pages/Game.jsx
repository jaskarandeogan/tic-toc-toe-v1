import React from "react";
import Header from "../components/game/Header";
import Pallete from "../components/game/Pallete";
import Scores from "../components/game/Scores";
import Modal from "../components/shared/Modal";
import EndOfRound from "../components/game/EndOfRound";
import RestartGame from "../components/game/RestartGame";

const Game = () => {
  const [openEndOFGame, setOpenEndOfGame] = React.useState(false);
  const [restartGame, setRestartGame] = React.useState(false);
  return (
    <div className="flex h-screen flex-col items-center  justify-center px-5 ">
      <div className="flex flex-col w-full md:w-[460px] md:w-md gap-y-5 mt-4 text-white">
        <Header setOpen={setRestartGame} />
        <Pallete />
        <Scores />
        <Modal open={restartGame} setOpen={setRestartGame}>
          <RestartGame setOpen={setRestartGame} />
        </Modal>
        <Modal open={openEndOFGame} setOpen={setOpenEndOfGame}>
          <EndOfRound setOpen={setOpenEndOfGame} />
        </Modal>
      </div>
    </div>
  );
};

export default Game;

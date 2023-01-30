import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/game/Header";
import Pallete from "../components/game/Pallete";
import Scores from "../components/game/Scores";
import Modal from "../components/shared/Modal";
import EndOfRound from "../components/game/EndOfRound";
import RestartGame from "../components/game/RestartGame";
import { calculateWinner } from "../components/logic/logic.js";

const Game = ({}) => {
  const [openEndOFGame, setOpenEndOfGame] = React.useState(false);
  const [restartGame, setRestartGame] = React.useState(false);
  const { player } = useParams();
  const [playerTurn, setPlayerTurn] = React.useState(player);

  console.log(player);

  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  const [turn, setTurn] = React.useState(player === "cross" ? "X" : "O");

  const handleClick = (index) => {
    const updatedSquares = squares.slice();
    if (updatedSquares[index] || calculateWinner(updatedSquares)) {
      return;
    }
    updatedSquares[index] = (turn ==="X" ? "X" : "O");
    setSquares(updatedSquares);
    setTurn(turn === "X" ? "O" : "X");
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  React.useEffect(() => {
    if (winner) {
      setOpenEndOfGame(true);
    }
  }, [winner]);

  React.useEffect(() => {
    console.log(player);
    setSquares(Array(9).fill(null));
    setPlayerTurn(player);
  }, [player, playerTurn]);




  return (
    <div className="flex h-screen flex-col items-center  justify-center px-5 ">
      <div className="flex flex-col w-full md:w-[460px] md:w-md gap-y-5 mt-4 text-white">
        <Header setOpen={setRestartGame} turn={turn}  />
        <Pallete
          squares={squares}
          setSquares={setSquares}
          handleClick={handleClick}
        />
        <Scores />
        <Modal open={restartGame} setOpen={setRestartGame}>
          <RestartGame setOpen={setRestartGame} />
        </Modal>
        <Modal open={openEndOFGame} setOpen={setOpenEndOfGame}>
          <EndOfRound setOpen={setOpenEndOfGame} setTurn={setTurn} playerTurn={playerTurn}/>
        </Modal>
      </div>
    </div>
  );
};

export default Game;

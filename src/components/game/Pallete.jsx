import React from "react";
import Box from "../shared/Box";

const Pallete = ({
  handleClick = () => {},
  squares = [],
  setSquares = () => {},
}) => {
  return (
    <div className="grid grid-cols-3 grid-row-3 gap-5">
      {squares.map((square, index) => (
        <Box key={index} player={square} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Pallete;

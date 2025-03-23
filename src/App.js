import React, { useState } from "react";
import "./App.css";

const MatrixGame = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickOrder([...clickOrder, index]);
    }

    if (clickOrder.length === 7) {
      setTimeout(() => {
        revealOrange();
      }, 500);
    }
  };

  const revealOrange = () => {
    clickOrder.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prev) => {
          const newGrid = [...prev];
          newGrid[idx] = "orange";
          return newGrid;
        });
      }, i * 300);
    });
  };

  return (
    <div className="container">
      <div className="grid">
        {grid.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MatrixGame;

import React, { useContext } from "react";
import Square from "./Square";
import { GameContext } from "../context/GameProvider";

function Board() {
  const { gridSize } = useContext(GameContext);

  function renderSquare(i) {
    return <Square move={i} key={i} />;
  }

  function renderBoard(gridSize) {
    const board = [];
    let count = 0;
    for (let i = 0; i < gridSize; i++) {
      let children = [];
      for (let j = 0; j < gridSize; j++) {
        children.push(renderSquare(count++));
      }
      board.push(
        <div key={i} className="board-row">
          {children}
        </div>
      );
    }

    return board;
  }

  return <div>{renderBoard(gridSize)}</div>;
}

export default Board;

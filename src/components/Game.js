import React from "react";
import Board from "./Board";
import GameStatus from "./GameStatus";
import GameHistory from "./GameHistory";

import GameProvider from "../context/GameProvider";

function Game() {
  return (
    <GameProvider>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <GameStatus />
          <GameHistory />
        </div>
      </div>
    </GameProvider>
  );
}

export default Game;

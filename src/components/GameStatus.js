import React, { useContext } from "react";
import { GameContext } from "../context/GameProvider";

function GameStatus() {
  const { state } = useContext(GameContext);

  let status = `Next player ${state.xIsNext ? "X" : "O"}`;
  if (state.winner.player) {
    status = `Winner ${state.winner.player}`;
  } else if (!state.currentHistory.squares.includes(null)) {
    status = `Draw`;
  }

  return <div className="status">{status}</div>;
}

export default GameStatus;

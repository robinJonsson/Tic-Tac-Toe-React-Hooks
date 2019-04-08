import React, { useContext } from "react";
import { GameContext } from "../context/GameProvider";

function Square({ move }) {
  const { state, dispatch } = useContext(GameContext);

  const classes = ["square"];
  if (state.currentHistory.move === move) classes.push("square-selected");
  if (state.winner.line.includes(move)) classes.push("winner");

  return (
    <button
      className={classes.join(" ")}
      onClick={() => dispatch({ type: "NEW_TURN", move })}
    >
      {state.currentHistory.squares[move]}
    </button>
  );
}

export default Square;

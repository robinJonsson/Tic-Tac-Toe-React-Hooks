import React, { useContext } from "react";
import { createFindColRow } from "../utils";
import { GameContext } from "../context/GameProvider";

function GameHistory() {
  const { state, dispatch, gridSize } = useContext(GameContext);
  const findColRow = createFindColRow(gridSize);

  const historyList = state.history.map((history, turn) => {
    if (state.historyOrder === "desc") {
      // Traverse history backwards
      history = state.history[state.history.length - turn - 1];
      turn = state.history.length - turn - 1;
    }

    let text = "Go to game start";
    if (history.turn) {
      text = `Go to move ${history.turn} (${findColRow(history.move)})`;
    }
    const selected = state.stepNumber === history.turn ? "selected" : "";

    return (
      <li key={history.turn}>
        <button
          className={selected}
          onClick={() => {
            dispatch({ type: "JUMP_TO", turn });
          }}
        >
          {text}
        </button>
      </li>
    );
  });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_ORDER", order: state.historyOrder });
        }}
      >
        {state.historyOrder} order
      </button>
      <ol>{historyList}</ol>
    </>
  );
}

export default GameHistory;

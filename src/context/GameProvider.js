import React, { useReducer, createContext } from "react";
import gameReducer from "./gameReducer";

const initialState = {
  history: [{ squares: Array(9).fill(null), move: null, turn: 0 }],
  xIsNext: true,
  stepNumber: 0,
  historyOrder: "asc",
  winner: { player: null, line: [] },
  currentHistory: { squares: Array(9).fill(null), move: null, turn: 0 }
};

const GameContext = createContext(initialState);

function GameProvider(props) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch, gridSize: 3 }}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext };
export default GameProvider;

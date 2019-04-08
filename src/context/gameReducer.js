import { calculateWinner } from "../utils";

function gameReducer(state, action) {
  switch (action.type) {
    case "NEW_TURN": {
      const currentSquares = state.currentHistory.squares;
      if (state.winner.player || currentSquares[action.move]) {
        return state;
      }

      const squares = [...currentSquares];
      squares[action.move] = state.xIsNext ? "X" : "O";
      const stepNumber = state.stepNumber + 1;
      const newHistory = { squares, move: action.move, turn: stepNumber };
      return {
        ...state,
        history: [...state.history.slice(0, stepNumber), newHistory],
        xIsNext: !state.xIsNext,
        stepNumber,
        winner: calculateWinner(squares),
        currentHistory: newHistory
      };
    }
    case "JUMP_TO": {
      const newHistory = { ...state.history[action.turn] };
      return {
        ...state,
        stepNumber: action.turn,
        xIsNext: action.turn % 2 === 0,
        winner: calculateWinner(newHistory.squares),
        currentHistory: newHistory
      };
    }
    case "TOGGLE_ORDER": {
      return {
        ...state,
        historyOrder: action.order === "asc" ? "desc" : "asc"
      };
    }
    default: {
      return state;
    }
  }
}

export default gameReducer;

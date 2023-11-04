import { createContext, useReducer } from "react";
import { initialBoard } from "../data";

const INITIAL_BOARD = initialBoard();

export const BoardContext = createContext({
  board: INITIAL_BOARD,
  turns: [],
  currentTurn: 1,
  selectedPiece: {
    index: 0,
    team: "",
    allowedIndexes: [],
  },
  updateState: () => {},
});

const boardReducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE_TURN":
      // eslint-disable-next-line no-case-declarations
      const currentBoard = [...state.board].map((square) => {
        if (square) return { ...square };
        return null;
      });
      currentBoard[action.payload.selectedIndex] =
        currentBoard[action.payload.pieceIndex];
      currentBoard[action.payload.pieceIndex] = null;
      return {
        currentTurn: state.currentTurn + 1,
        board: currentBoard,
        turns: [
          {
            turn: state.currentTurn,
            board: currentBoard,
            team: state.selectedPiece.team,
          },
          ...state.turns,
        ],
        selectedPiece: null,
      };

    case "PIECE_SELECT":
      return {
        ...state,
        selectedPiece: { ...action.payload },
      };

    case "RESET_SELECT":
      return {
        ...state,
        selectedPiece: null,
      };

    default:
      return state;
  }
};

const BoardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(boardReducer, {
    board: INITIAL_BOARD,
    turns: [],
    currentTurn: 1,
    selectedIndex: null,
  });

  const contextValue = {
    ...state,
    updateState: dispatch,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;

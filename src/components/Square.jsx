import { useContext } from "react";
import { BoardContext } from "../store/BoardContext";
import { pathPredictor } from "../algo";

export default function Square({ square, index, color }) {
  const { board, selectedPiece, turns, updateState } = useContext(BoardContext);

  const handleClick = () => {
    const prevTeam = turns[0]?.team || "black";

    if (!selectedPiece && !square) return;

    if (!selectedPiece && square.team === prevTeam) return;

    if (square && selectedPiece && selectedPiece.index === index) {
      return updateState({ type: "RESET_SELECT" });
    }

    if (square && !selectedPiece) {
      return updateState({
        type: "PIECE_SELECT",
        payload: {
          index,
          team: square.team,
          allowedIndexes: pathPredictor(
            board,
            square.pieceName,
            index,
            square.team
          ),
        },
      });
    }

    if (selectedPiece && selectedPiece.allowedIndexes.includes(index)) {
      updateState({
        type: "COMPLETE_TURN",
        payload: { pieceIndex: selectedPiece.index, selectedIndex: index },
      });
    }
  };

  return (
    <li className="square">
      <button
        className={`${color}-back ${
          selectedPiece?.index === index ||
          selectedPiece?.allowedIndexes.includes(index)
            ? "active-square"
            : undefined
        }`}
        onClick={handleClick}
      >
        {square ? (
          <img src={`/assets/${square.pieceName}_${square.team}.svg`} />
        ) : null}
      </button>
    </li>
  );
}

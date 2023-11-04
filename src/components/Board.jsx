import { useContext } from "react";
import { BoardContext } from "../store/BoardContext.jsx";
import { colorPalete } from "../data";
import Square from "./Square";

const colors = colorPalete();

export default function Board() {
  const { board } = useContext(BoardContext);

  return (
    <ul className="board">
      {board.map((square, index) => (
        <Square
          key={index}
          square={square}
          index={index}
          color={colors[index]}
        />
      ))}
    </ul>
  );
}

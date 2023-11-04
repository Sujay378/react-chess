const pieceOrder = [
  "rook",
  "knight",
  "bishop",
  "queen",
  "king",
  "bishop",
  "knight",
  "rook",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
];

const updateBoard = (board, start, array) => {
  array.forEach((piece, index) => {
    board[index + start] = {
      pieceName: piece,
      index: start + index,
      team: start ? "black" : "white",
    };
  });
};

export const colorPalete = () => {
  const colors = ["white", "black"];
  const arr = [];
  for (let i = 0; i < 64; i++) {
    if (i % 8 === 0) {
      colors.reverse();
    }
    arr.push(colors[i % 2]);
  }
  return arr;
};

export const initialBoard = () => {
  const board = Array.from({ length: 64 }, () => null);
  updateBoard(board, 0, pieceOrder);
  updateBoard(
    board,
    48,
    [...pieceOrder.slice(0, 8).reverse(), ...pieceOrder.slice(8)].reverse()
  );
  return board;
};

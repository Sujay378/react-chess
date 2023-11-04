const boardMap = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29, 30, 31],
  [32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47],
  [48, 49, 50, 51, 52, 53, 54, 55],
  [56, 57, 58, 59, 60, 61, 62, 63],
];

const findIndexInMap = (pieceIndex) => {
  const row = Math.floor(pieceIndex / 8);
  const col = boardMap[row].findIndex((value) => value === pieceIndex);
  return { row, col };
};

const pieceAlgorithms = {
  king(board, team, pieceIndexInMap) {
    const arr = [];
    const { row, col } = pieceIndexInMap;
    if (
      boardMap[row - 1] &&
      boardMap[row - 1][col] &&
      (!board[boardMap[row - 1][col]] ||
        board[boardMap[row - 1][col]].team !== team)
    )
      arr.push(boardMap[row - 1][col]);
    if (
      boardMap[row - 1] &&
      boardMap[row - 1][col + 1] &&
      (!board[boardMap[row - 1][col + 1]] ||
        board[boardMap[row - 1][col + 1]].team !== team)
    )
      arr.push(boardMap[row - 1][col + 1]);
    if (
      boardMap[row + 1] &&
      boardMap[row][col + 1] &&
      (!board[boardMap[row][col + 1]] ||
        board[boardMap[row][col + 1]].team !== team)
    )
      arr.push(boardMap[row][col + 1]);
    if (
      boardMap[row + 1] &&
      boardMap[row + 1][col + 1] &&
      (!board[boardMap[row + 1][col + 1]] ||
        board[boardMap[row + 1][col + 1]].team !== team)
    )
      arr.push(boardMap[row + 1][col + 1]);
    if (
      boardMap[row + 1] &&
      boardMap[row + 1][col] &&
      (!board[boardMap[row + 1][col]] ||
        board[boardMap[row + 1][col]].team !== team)
    )
      arr.push(boardMap[row + 1][col]);
    if (
      boardMap[row + 1] &&
      boardMap[row + 1][col - 1] &&
      (!board[boardMap[row + 1][col - 1]] ||
        board[boardMap[row + 1][col - 1]].team !== team)
    )
      arr.push(boardMap[row + 1][col - 1]);
    if (
      boardMap[row] &&
      boardMap[row][col - 1] &&
      (!board[boardMap[row][col - 1]] ||
        board[boardMap[row][col - 1]].team !== team)
    )
      arr.push(boardMap[row][col - 1]);
    if (
      boardMap[row - 1] &&
      boardMap[row - 1][col - 1] &&
      (!board[boardMap[row - 1][col - 1]] ||
        board[boardMap[row - 1][col - 1]].team !== team)
    )
      arr.push(boardMap[row - 1][col - 1]);
    return arr;
  },

  queen(board, team, pieceIndexInMap) {
    const arr = [
      ...this.rook(board, team, pieceIndexInMap),
      ...this.bishop(board, team, pieceIndexInMap),
    ];
    return arr;
  },

  bishop(board, team, pieceIndexInMap) {
    const arr = [];
    const { row, col } = pieceIndexInMap;
    let i = 1;
    //upper diagonal left
    while (boardMap[row + i] && boardMap[row + i][col + i]) {
      if (
        board[boardMap[row + i][col + i]] &&
        board[boardMap[row + i][col + i]].team === team
      ) {
        break;
      }
      if (
        board[boardMap[row + i][col + i]] &&
        board[boardMap[row + i][col + i]].team !== team
      ) {
        arr.push(boardMap[row + i][col + i]);
        break;
      }
      arr.push(boardMap[row + i][col + i]);
      i += 1;
    }
    //upper diagonal right
    i = 1;
    while (boardMap[row + i] && boardMap[row + i][col - i]) {
      if (
        board[boardMap[row + i][col - i]] &&
        board[boardMap[row + i][col - i]].team === team
      ) {
        break;
      }
      if (
        board[boardMap[row + i][col - i]] &&
        board[boardMap[row + i][col - i]].team !== team
      ) {
        arr.push(boardMap[row + i][col - i]);
        break;
      }
      arr.push(boardMap[row + i][col - i]);
      i += 1;
    }
    //lower diagonal left
    i = 1;
    while (boardMap[row - i] && boardMap[row - i][col + i]) {
      if (
        board[boardMap[row - i][col + i]] &&
        board[boardMap[row - i][col + i]].team === team
      ) {
        break;
      }
      if (
        board[boardMap[row - i][col + i]] &&
        board[boardMap[row - i][col + i]].team !== team
      ) {
        arr.push(boardMap[row - i][col + i]);
        break;
      }
      arr.push(boardMap[row - i][col + i]);
      i += 1;
    }
    //lower diagonal right
    i = 1;
    while (boardMap[row - i] && boardMap[row - i][col - i]) {
      if (
        board[boardMap[row - i][col - i]] &&
        board[boardMap[row - i][col - i]].team === team
      ) {
        break;
      }
      if (
        board[boardMap[row - i][col - i]] &&
        board[boardMap[row - i][col - i]].team !== team
      ) {
        arr.push(boardMap[row - i][col - i]);
        break;
      }
      arr.push(boardMap[row - i][col - i]);
      i += 1;
    }
    return arr;
  },

  knight(board, team, pieceIndexInMap) {
    const arr = [];
    const { row, col } = pieceIndexInMap;
    // vertical
    if (
      boardMap[row - 2] &&
      boardMap[row - 2][col + 1] &&
      board[boardMap[row - 2][col + 1]]?.team !== team
    )
      arr.push(boardMap[row - 2][col + 1]);
    if (
      boardMap[row - 2] &&
      boardMap[row - 2][col - 1] &&
      board[boardMap[row - 2][col - 1]]?.team !== team
    )
      arr.push(boardMap[row - 2][col - 1]);
    if (
      boardMap[row + 2] &&
      boardMap[row + 2][col + 1] &&
      board[boardMap[row + 2][col + 1]]?.team !== team
    )
      arr.push(boardMap[row + 2][col + 1]);
    if (
      boardMap[row + 2] &&
      boardMap[row + 2][col - 1] &&
      board[boardMap[row + 2][col - 1]]?.team !== team
    )
      arr.push(boardMap[row + 2][col - 1]);
    // horizontal
    if (
      boardMap[row - 1] &&
      boardMap[row - 1][col + 2] &&
      board[boardMap[row - 1][col + 2]]?.team !== team
    )
      arr.push(boardMap[row - 1][col + 2]);
    if (
      boardMap[row - 1] &&
      boardMap[row - 1][col - 2] &&
      board[boardMap[row - 1][col - 2]]?.team !== team
    )
      arr.push(boardMap[row - 1][col - 2]);
    if (
      boardMap[row + 1] &&
      boardMap[row + 1][col + 2] &&
      board[boardMap[row + 1][col + 2]]?.team !== team
    )
      arr.push(boardMap[row + 1][col + 2]);
    if (
      boardMap[row + 1] &&
      boardMap[row + 1][col - 2] &&
      board[boardMap[row + 1][col - 2]]?.team !== team
    )
      arr.push(boardMap[row + 1][col - 2]);
    return arr;
  },

  rook(board, team, pieceIndexInMap) {
    const arr = [];
    const { row, col } = pieceIndexInMap;
    for (let i = col + 1; i < 8; i += 1) {
      if (board[boardMap[row][i]] && board[boardMap[row][i]].team !== team) {
        arr.push(boardMap[row][i]);
        break;
      }
      if (board[boardMap[row][i]]?.team === team) {
        break;
      }
      arr.push(boardMap[row][i]);
    }
    for (let i = col - 1; i >= 0; i -= 1) {
      if (board[boardMap[row][i]] && board[boardMap[row][i]].team !== team) {
        arr.push(boardMap[row][i]);
        break;
      }
      if (board[boardMap[row][i]] && board[boardMap[row][i]]?.team === team) {
        break;
      }
      arr.push(boardMap[row][i]);
    }
    for (let i = row + 1; i < 8; i += 1) {
      if (board[boardMap[i][col]] && board[boardMap[i][col]].team !== team) {
        arr.push(boardMap[i][col]);
        break;
      }
      if (board[boardMap[i][col]] && board[boardMap[i][col]].team === team) {
        break;
      }
      arr.push(boardMap[i][col]);
    }
    for (let i = row - 1; i >= 0; i -= 1) {
      if (board[boardMap[i][col]] && board[boardMap[i][col]].team !== team) {
        arr.push(boardMap[i][col]);
        break;
      }
      if (board[boardMap[i][col]] && board[boardMap[i][col]]?.team === team) {
        break;
      }
      arr.push(boardMap[i][col]);
    }
    return arr;
  },

  pawn(board, team, pieceIndexInMap) {
    const arr = [];
    const { row, col } = pieceIndexInMap;
    if (team === "white") {
      arr.push(boardMap[row + 1][col]);
      board[boardMap[row + 1][col + 1]] &&
        board[boardMap[row + 1][col + 1]].team !== team &&
        arr.push(boardMap[row + 1][col + 1]);
      board[boardMap[row + 1][col - 1]] &&
        board[boardMap[row + 1][col - 1]].team !== team &&
        arr.push(boardMap[row + 1][col - 1]);
    }
    if (team === "black") {
      arr.push(boardMap[row - 1][col]);
      board[boardMap[row - 1][col + 1]] &&
        board[boardMap[row - 1][col + 1]].team !== team &&
        arr.push(boardMap[row - 1][col + 1]);
      board[boardMap[row - 1][col - 1]] &&
        board[boardMap[row - 1][col - 1]].team !== team &&
        arr.push(boardMap[row - 1][col - 1]);
    }
    if (row === 1 && team === "white") {
      arr.push(boardMap[row + 2][col]);
    }
    if (row === 6 && team === "black") {
      arr.push(boardMap[row - 2][col]);
    }
    return arr;
  },
};

export function pathPredictor(board, pieceName, pieceIndex, team) {
  const pieceIndexInMap = findIndexInMap(pieceIndex);
  return pieceAlgorithms[pieceName](board, team, pieceIndexInMap);
}

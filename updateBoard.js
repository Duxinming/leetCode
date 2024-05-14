var updateBoard = function (board, click) {
  let row = click[0]
  let col = click[1]
  if (board[row][col] === 'M') {
    board[row][col] = 'X'
    return board
  }
  let bfs = () => {
    let queue = [[row, col]]
    while (queue.length) {
      let [curRow, curCol] = queue.shift()
      const a = [
        [curRow - 1, curCol - 1],
        [curRow, curCol - 1],
        [curRow + 1, curCol - 1],
        [curRow - 1, curCol],
        [curRow + 1, curCol],
        [curRow - 1, curCol + 1],
        [curRow, curCol + 1],
        [curRow + 1, curCol + 1],
      ]
      let numX = 0
      for (let [x, y] of a) {
        if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
          if (board[x][y] === 'M') {
            numX++
          }
        }
      }
      if (numX) {
        board[curRow][curCol] = numX.toString()
      } else {
        board[curRow][curCol] = 'B'
        for (let [x, y] of a) {
          if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
            if (board[x][y] === 'E') {
              queue.push([x, y])
              board[x][y] = 'B'
            }
          }
        }
      }
    }
  }
  bfs()
  return board
}

var orangesRotting = function (grid) {
  const w = grid[0].length
  const h = grid.length
  let fresh = 0
  let q = []
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      let item = grid[i][j]
      if (item === 1) {
        fresh++
      } else if (item === 2) {
        q.push([i, j])
      }
    }
  }
  let res = -1
  while (q.length) {
    res++
    let temp = q
    q = []
    for (let [i, j] of temp) {
      for (let [x, y] of [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1],
      ]) {
        if (x >= 0 && x < h && y >= 0 && y < w && grid[x][y] === 1) {
          grid[x][y] = 2
          q.push([x, y])
          fresh--
        }
      }
    }
  }
  return fresh ? -1 : Math.max(res, 0)
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
)

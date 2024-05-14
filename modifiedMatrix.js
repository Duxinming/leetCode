var modifiedMatrix = function (matrix) {
  let m = matrix[0].length,
    x = matrix.length,
    tempArr = Array.from(matrix)
  let arr = new Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    arr[i] = tempArr.sort((a, b) => b[i] - a[i])[0][i]
  }
  return matrix.map((e) => {
    let i = e.indexOf(-1)
    while (i !== -1 && e[i] === -1) {
      if (i !== -1) {
        e[i] = arr[i]
      }
      i = e.indexOf(-1, i + 1)
    }
    return e
  })
}
console.log(
  '🚀 ~ modifiedMatrix ~ modifiedMatrix:',
  modifiedMatrix([
    [-1, 0, 0, 2, 2],
    [2, 0, 0, 2, 1],
    [4, 3, 2, 1, 1],
    [-1, -1, 0, 2, 4],
    [1, 0, 3, -1, 0],
  ])
)

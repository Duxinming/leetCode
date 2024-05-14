var getRow = function (rowIndex) {
  const numRows = rowIndex + 1
  const dp = new Array(numRows).fill([])
  dp[0] = [1]
  dp[1] = [1, 1]

  for (let i = 2; i < numRows; i++) {
    dp[i] = new Array(i + 1)
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        dp[i][j] = 1
        continue
      }
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }
  return dp[rowIndex]
}

console.log(generate(4))

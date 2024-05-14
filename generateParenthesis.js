var generateParenthesis = function (n) {
  const res = []
  const dfs = (path, left, right) => {
    if (left > n || left < right) {
      return
    }
    if (left + right === 2 * n) {
      res.push(path)
      return
    }

    dfs(path + '(', left + 1, right)
    dfs(path + ')', left, right + 1)
  }

  dfs('', 0, 0)
  return res
}

console.log(generateParenthesis(3))

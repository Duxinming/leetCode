var letterCombinations = function (digits) {
  if (digits === '') return []
  const n = digits.length
  const strMap = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const arr = new Array(n).fill([]).map((e, index) => strMap[digits[index]])

  const resArr = []

  function backTracking(digits, curIndex, route) {
    if (curIndex === digits.length) {
      resArr.push(route.join(''))
      return
    }
    let tempArr = strMap[digits[curIndex]]
    for (let i = 0, length = tempArr.length; i < length; i++) {
      route.push(tempArr[i])
      backTracking(digits, curIndex + 1, route)
      route.pop()
    }
  }
  backTracking(digits, 0, [])
  return resArr
}

console.log(letterCombinations('23'))

var threeSumClosest = function (nums, target) {
  const sortNums = Array.from(nums).sort((a, b) => a - b)
  let min = Infinity
  for (var i = 0; i < sortNums.length; i++) {
    let base = sortNums[i]
    let l = i + 1
    let r = sortNums.length - 1
    while (l < r) {
      let sum = base + sortNums[l] + sortNums[r]
      if (sum === target) {
        return sum
      } else if (sum > target) {
        r--
      } else {
        l++
      }
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum
      }
    }
  }
  return min
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))

var maxAltitude = function (heights, limit) {
  if (!heights.length || limit === 0) {
    return []
  }
  let left = 0
  let right = limit - 1
  let res = [findMax(heights, left, right)]
  while (right < heights.length - 1) {
    left++
    right++
    res.push(findMax(heights, left, right))
  }
  return res
}
function findMax(nums, left, right) {
  let max = -Infinity
  for (let i = left; i <= right; i++) {
    max = Math.max(max, nums[i])
  }
  return max
}
console.log(
  '🚀 ~ maxAltitude ~ maxAltitude:',
  maxAltitude([1, 3, 1, 2, 0, 5], 3)
)

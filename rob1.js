var rob = function (nums) {
  let n = nums.length
  let a = getMax(nums.slice(0, n - 1))
  let b = getMax(nums.slice(1, n))
  return Math.max(a, b)
}

var getMax = function (nums) {
  if (nums.length <= 2) {
    return Math.max(nums[0], nums[1] || 0)
  }
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = nums[1]
  for (let i = 2; i < nums.length; i++) {
    for (let j = i - 2; j >= 0; j--) {
      dp[i] = Math.max(dp[i], dp[j] + nums[i])
    }
  }
  return Math.max(dp[nums.length - 1], dp[nums.length - 2])
}

console.log(rob([1, 2, 3, 1]))

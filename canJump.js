var canJump = function (nums) {
  if (nums.length === 0) {
    return true
  }
  let dp = [true]
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i]) {
        continue
      } else {
        dp[i] = dp[j] && nums[j] >= i - j
      }
    }
  }
  return dp[nums.length - 1]
}

console.log(canJump([2, 3, 1, 1, 4]))

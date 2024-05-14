var moveZeroes = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
  }
  return nums
}
console.log('🚀 ~ moveZeroes ~ moveZeroes:', moveZeroes([1, 1, 0, 3, 12]))

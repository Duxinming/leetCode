var lengthOfLongestSubstring = function (s) {
  if (s === ' ') {
    return 1
  }
  let left = 0,
    right = 0,
    base = '',
    res = 0
  while (right + 1 < s.length) {
    base = s.slice(left, right + 1)
    right++
    if (base.indexOf(s[right]) !== -1) {
      left++
      right = left
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}

console.log(lengthOfLongestSubstring(' '))

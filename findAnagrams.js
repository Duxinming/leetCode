var findAnagrams = function (s, p) {
  let left = 0,
    right = p.length - 1
  while (right < s.length) {
    let temp = s.substring(left, right + 1)
    if (temp.split('').sort().join('') == p.split('').sort().join('')) {
      return temp
    }
    left++
    right++
  }
}

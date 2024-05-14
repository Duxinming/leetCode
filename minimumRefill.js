var minimumRefill = function (plants, capacityA, capacityB) {
  let left = 0
  let right = plants.length - 1
  let a = capacityA
  let b = capacityB
  let ans = 0
  while (left <= right) {
    if (left === right) {
      if (b > a) {
        if (b < plants[left]) {
          b = capacityB
          ans++
        }
        b -= plants[right]
        right--
      } else {
        if (a < plants[left]) {
          a = capacityA
          ans++
        }
        a -= plants[left]
        left++
      }
    } else {
      if (a < plants[left]) {
        a = capacityA
        ans++
      }
      a -= plants[left]
      left++
      if (b < plants[right]) {
        b = capacityB
        ans++
      }
      b -= plants[right]
      right--
    }
  }
  return ans
}

console.log(minimumRefill([2, 1, 1], 2, 2))

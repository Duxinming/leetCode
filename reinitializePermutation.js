var reinitializePermutation = function (n) {
  let perm = new Array(n).fill(0).map((_, i) => i)
  let count = 0
  while (true) {
    let newPerm = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        newPerm[i / 2] = perm[i]
      } else {
        newPerm[n / 2 + (i - 1) / 2] = perm[i]
      }
    }
    if (
      newPerm.join('') ===
      new Array(n)
        .fill(0)
        .map((_, i) => i)
        .join('')
    ) {
      return count + 1
    }
    perm = newPerm
    count++
  }
}
console.log(
  '🚀 ~ reinitializePermutation ~ reinitializePermutation:',
  reinitializePermutation(6)
)

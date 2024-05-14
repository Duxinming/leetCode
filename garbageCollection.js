var garbageCollection = function (garbage, travel) {
  let maxM = -1,
    maxP = -1,
    maxG = -1
  let map = new Map()
  let time = [travel[0]]
  garbage.forEach((e, index) => {
    if (e.indexOf('M') !== -1) {
      maxM = index
    }
    if (e.indexOf('P') !== -1) {
      maxP = index
    }
    if (e.indexOf('G') !== -1) {
      maxG = index
    }
  })

  garbage
    .join('')
    .split('')
    .forEach((e) => {
      map.set(e, (map.get(e) || 0) + 1)
    })
  for (let i = 1; i < travel.length; i++) {
    time[i] = travel[i] + time[i - 1]
  }
  let res =
    (map.get('M') || 0) +
    (map.get('P') || 0) +
    (map.get('G') || 0) +
    (time[maxM - 1] || 0) +
    (time[maxP - 1] || 0) +
    (time[maxG - 1] || 0)
  return res
}

console.log(garbageCollection(['G', 'P', 'GP', 'GG'], [2, 4, 3]))

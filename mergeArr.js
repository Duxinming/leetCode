function mergeArr() {
  const arr = [
    [{ locatorId: 0 }, { locatorId: 1 }, { locatorId: 2 }, { locatorId: 2 }],
    [{ locatorId: 2 }, { locatorId: 3 }, { locatorId: 4 }],
    [
      { locatorId: 2 },
      { locatorId: 2 },
      { locatorId: 4 },
      { locatorId: 5 },
      { locatorId: 6 },
    ],
  ]
  let res = arr.reduce((cur, pre) => {
    return pre.filter(({ locatorId }) =>
      cur.map((k) => k.locatorId).includes(locatorId)
    )
  })
  console.log(res)
}

mergeArr()

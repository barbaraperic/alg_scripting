const diff = (arg1, arg2) => {
  return (
    [
      ...arg1.filter(e => !arg2.includes(e)),
      ...arg2.filter(e => !arg1.includes(e))
    ]
  )
}

const sym = (...args) => {
  return [...new Set(args.reduce(diff))]
}

sym([1, 2, 3, 3], [5, 2, 1, 4])
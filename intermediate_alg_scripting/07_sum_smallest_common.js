function sumSmallestCommon(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let sol = max

  for (let i = max - 1; i >= min; i--) {
    if (sol % i) {
      sol += max
      i = max
    }
  }

  return sol
}

sumSmallestCommon([1, 5])
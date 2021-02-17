function steamrollArray(array) {
  const flat = [].concat(...array)

  return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

steamrollArray([1, [2], [3, [[4]]]]);
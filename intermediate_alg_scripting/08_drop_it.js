function dropElements(arr, func) {
  const sliceIndex = arr.findIndex(func);

  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length)

}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });
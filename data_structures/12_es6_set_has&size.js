function checkSet(arrToBeSet, checkValue){

  // Only change code below this line
  let set = new Set(arrToBeSet)
  const hasValue = set.has(checkValue)
  return [hasValue, set.size]
  // console.log(set.size)
  // Only change code above this line

}

checkSet([1, 2, 3, 4], 2)
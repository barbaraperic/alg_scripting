function addTogether(first, second) {
  if (typeof first !== 'number') {
    return undefined;
  }

  const sum = second => {
    typeof second !== 'number' ? first + second : undefined;
    return second === undefined ? second => sum(second) : sum(second)
  }
}

addTogether(2)(3)
function truthCheck(collection, pre) {
  // const falsy = ["", null, undefined, 0, false, NaN]

  // const array = collection.map(object => {
  //   return falsy.includes(object[pre])
  // })

  // return array.every(el => el === false)

  return collection.every(obj => obj[pre])
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
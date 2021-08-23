function stringifyJSON(item) {
  // console.log(Object.keys(item))
  // console.log(Object.values(item))
  let objString = '{';
  for (const property in item) {
    const value = item[property];

    objString += `"${property}":`

    if (typeof value === "object") {
      objString += stringify(value)
    } else if (typeof value === "string") {
      objString += `"${value}"`
    } else if (typeof value === "number") {
      objString += `${value}`
    }
    objString += `,`;
  }
  objString += '}'

  return objString
  // implement here
}

stringifyJSON({ x: 5, y: 6 }); // => "{"x":5,"y":6}"

//     max-width: calc(100% - 64px);

// notice some edge cases below and see docs for more examples:
// stringifyJSON([3, true, undefined, "false"]); => "[3,true,null,"false"]"
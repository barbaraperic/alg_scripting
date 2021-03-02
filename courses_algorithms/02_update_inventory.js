function updateInventory(arr1, arr2) {

  // an array of objects

  const inventory = arr1.map((item) => {
      return {
          number: item[0],
          name: item[1]
      }
  })

  //map over new inventory and update the old one

  arr2.map(item => {
      // let obj = inventory.find(x => x.name === item[1]);

      const index = inventory.findIndex(obj => obj.name === item[1])


      if (index >= 0) {
          inventory[index].number += item[0]
      } else {
          inventory.push({number: item[0], name: item[1]})
      } 

  })

  // console.log(inventory)
  
  const result = inventory.map(item => {
      return [item.number, item.name]
  })

  const sortedResult = result.sort((a, b) => a[1].localeCompare(b[1]))
  console.log(sortedResult)
  
  return sortedResult
}

// Example inventory lists
var curInv = [

];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]

updateInventory(curInv, newInv);
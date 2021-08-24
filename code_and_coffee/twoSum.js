// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// EXAMPLE
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


const sumTwo = (array, target) => {
  let sum = 0;
  const sumArr = array.map((num, index) => {
    if (sum === target) {
      return index
    }
    sum += num;
     // sum += num
    // if (num + sum === target) {
    //   return num[index]
    // }
    
  })

  console.log(sumArr)

  console.log(sum)
}

sumTwo([2,7,11,15], 9)


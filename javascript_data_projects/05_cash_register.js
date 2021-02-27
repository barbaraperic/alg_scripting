function checkCashRegister(price, cash, cid) {

  function caluculateCashState(cid) {
    const cashReg = cid.reduce((obj, item) => {
      return {
        ...obj,
        [item[0]]: item[1]
      }
    }, {})

    const total = Object.values(cashReg).reduce((sum, num) => sum + num, 0)

  return Number(total.toFixed(2))
  }

const value = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "DOLLAR": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}



  const cashState = caluculateCashState(cid)
  const diff = cash - price

  function calculateChange(diff) {
    //diff = 5.25
    let moneyValue = value
    cid.map(item => item[1])
    
  }

  const status = {
    negative: "INSUFFICIENT_FUNDS",
    zero: "CLOSED",
    positive: "OPEN"
  }



  if (cashState < diff) {
    return {
      status: status.negative,
      change: []
    }
  }

  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])


//Code Explanation
// First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys. 

// Next, transform the CID array into a drawer object. Then, handle the conditions of exact change and insufficient funds. Loop through the denom array and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. Add this denomination to the accumulator of change_arr if any of this type was used. After the loop, change_arr is a 2D array of the change due, sorted from highest to lowest denomination. If there are no elements in change_arr or you still owe change, return the output object with a status of INSUFFICIENT_FUNDS. Finally you can give the correct change. Return the output object with a status of OPEN and change_arr as the value of change.
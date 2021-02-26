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
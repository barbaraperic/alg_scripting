function palindrome(str) {
  const input = str.replace(/[^0-9a-z]/gi, '')
.toLowerCase()
  const array = input.split('')
  let second = []

  for (let i = array.length - 1; i >= 0; i--) {
    second.push(array[i])
  }

  if (second.join('') === input) {
    return true
  } return false

}



palindrome("_eye");
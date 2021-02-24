// function rot13(str) {
//   const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   const rotAlphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');

//   const res = alphabet.reduce((acc,curr)=> (acc[curr]='',acc), {});

//   rotAlphabet.map((el, index) => {
//     res[alphabet[index]] = el
//   })

//   const arr = str.split('')
//   const result = []
//   const marks = ['?', '!', '.']

//   arr.map(letter => {
//     if (letter === ' ') {
//       result.push(' ')
//     }

//     if (marks.includes(letter)) {
//       result.push(letter)
//     }

//     result.push(res[letter])
//   })

//   return result.join('')
// }



function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

rot13("FREE LOVE?");
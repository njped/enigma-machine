// A --> K
// B --> I
// C --> G
// U --> D
// Z --> L
// F --> R
// E --> S
// Q --> P
// T --> N
// J --> X

const panel = {
  A: 'K',
  B: 'I',
  C: 'G',
  U: 'D',
  Z: 'L',
  F: 'R',
  E: 'S',
  Q: 'P',
  T: 'N',
  J: 'X',

  K: 'A',
  I: 'B',
  G: 'C',
  D: 'U',
  L: 'Z',
  R: 'F',
  S: 'E',
  P: 'Q',
  N: 'T',
  X: 'J'
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function createRoter(alphabet) {
  let newAlphabet = [...alphabet]
  let newPanel = {

  }
  let index = Math.floor(Math.random() * newAlphabet.length)
  let aChar = newAlphabet[index]
  newAlphabet.splice(index, 1)
  let indexPair = Math.floor(Math.random() * newAlphabet.length)
  let aCharPair = newAlphabet[indexPair]
  newAlphabet.splice(indexPair, 1)

}

// console.log(panel.K)
// console.log(panel.hasOwnProperty('H'));
// console.log(panel.hasOwnProperty('P'));
// console.log('N' in panel);
// console.log('O' in panel);
let message = 'HELLO'
let response = []
let orginal = []

// Encrypt
for(let i = 0; i < message.length; i++) {
  response.push(plugBoard(message[i]))
}

// Decrypt
for(let i = 0; i < response.length; i++) {
  orginal.push(plugBoard(response[i]))
}


function plugBoard(aChar) {
  if(panel.hasOwnProperty(aChar)) {
    return panel[aChar]
  }
  else {
    return aChar
  }
}

console.log(response.join(''));
console.log(orginal.join(''))

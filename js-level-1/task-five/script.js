"use strict"

var magicNumber
var userAnswer

function magicNumber() {
  magicNumber = Math.floor(Math.random() * 100) + 1 // 1 to 100 (inclusive)
}

window.onload = magicNumber()

function promptUser() {
  userAnswer = prompt(`Guess the magic number from 1 to 100 — you have ${7 - numberOfGuesses} tries left.`)
}

for (var numberOfGuesses = 0; numberOfGuesses <= 7; numberOfGuesses++) {
  if (!numberOfGuesses) { // to prompt user for the first time 
    promptUser()
  } else if (Number.isNaN(+userAnswer) && numberOfGuesses < 7) { // 123e-5, 0xFF and Infinity, for example, are being considered numbers (https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful)
    alert(`Type a number, please. You have ${7 - numberOfGuesses} tries left.`)
    promptUser()
  } else if (userAnswer == magicNumber) { // == and not === because it was checked above if it is not a number
    alert(`You won in ${numberOfGuesses} tries!`)
    break
  } else { // if the answer is wrong (not the magic number)
    if (numberOfGuesses === 7) {
      alert(`You lost! The magic number was ${magicNumber}.`)
    } else {
      let isGreater = magicNumber > userAnswer
      alert(`The magic number is ${isGreater ? 'greater' : 'lesser' } than ${userAnswer}! You have ${7 - numberOfGuesses} tries left.`)
      promptUser()
    }
  }
}

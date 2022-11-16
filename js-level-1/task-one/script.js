"use strict"

function encrypt(sentence) {
  const words = sentence.split(' ')
 
  let encryptedString = ''

  for (let word of words) {
    if (word.length % 3 === 0) {
      encryptedString += '0'
    } else {
      encryptedString += '1'
    } 
  }

  return encryptedString
}

console.log("How are you? — " + encrypt("How are you?"))
console.log("Hi — " + encrypt("Hi"))
console.log("I promise I won’t start an international incident, like you almost did — " + encrypt("I promise I won’t start an international incident, like you almost did"))
console.log("So a gun-toting psychopath finds some ancient remains. So what? — " + encrypt("So a gun-toting psychopath finds some ancient remains. So what?"))
console.log("Did you know that you can't breathe while smiling? — " + encrypt("Did you know that you can't breathe while smiling?"))
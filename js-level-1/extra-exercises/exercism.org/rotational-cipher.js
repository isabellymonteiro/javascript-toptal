// https://exercism.org/tracks/javascript/exercises/rotational-cipher
"use strict"

// primary solution
const rotate = (string, rotationNumber) => {
  let newString = ''
  for (let character of string) {
    let asciiNumber = character.charCodeAt(0)

    if (asciiNumber >= 65 && asciiNumber <= 90) { // A-Z
      newString += String.fromCharCode(65 + (asciiNumber - 65 + rotationNumber) % 26)
    } else if (asciiNumber >= 97 && asciiNumber <= 122) { // a-z
      newString += String.fromCharCode(97 + (asciiNumber - 97 + rotationNumber) % 26)
    } else { // not a letter
      newString += character
    }
  }
  return newString
}

/* secondary solution
const rotate = (string, rotationNumber) => {
  const stringArray = [...string]

  return stringArray.reduce((newString, currentCharacter) => {
    let asciiNumber = currentCharacter.charCodeAt(0)
    if (asciiNumber >= 65 && asciiNumber <= 90) {
      return newString += String.fromCharCode(65 + (asciiNumber - 65 + rotationNumber) % 26)
    }
    if (asciiNumber >= 97 && asciiNumber <= 122) {
      return newString += String.fromCharCode(97 + (asciiNumber - 97 + rotationNumber) % 26)
    }
    return newString += currentCharacter
  }, '')
}
*/

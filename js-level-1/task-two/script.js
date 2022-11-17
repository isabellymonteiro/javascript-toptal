"use strict"

function checkPingPong(number) {
  if (number % 5 === 0 && number % 7 === 0) {
    return "PingPong"
  } else if (number % 5 === 0) {
    return "Ping"
  } else if (number % 7 === 0) {
    return "Pong"
  } else {
    return number
  }
}

function pingPong() {
  for (let number = 1; number <= 100; number++) {
    console.log(checkPingPong(number))
  }
}

function concatenatePingPong() {
  let concatenatedString = ''

  for (let number = 1; number <= 100; number++) {
    concatenatedString += checkPingPong(number)
  }

  return concatenatedString
}

console.log("PingPong function call:") 
pingPong()
console.log("concatenatePingPong function return: " + concatenatePingPong())

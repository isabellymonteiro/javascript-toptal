const startTimerButton = document.querySelector('button')
const timers = document.getElementById('timers')

let totalTimers = 0

startTimerButton.addEventListener('click', () => {
  totalTimers++
  updateButton()

  startTimer(Math.floor(Math.random() * 8) + 2).then((doneString) => {
    totalTimers--
    updateButton()
    
    const newDiv = document.createElement('div')
    newDiv.textContent = doneString

    timers.appendChild(newDiv)
  })
})

const startTimer = (seconds) => { 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done in ${seconds} seconds!`)
    }, 1000 * seconds)
  })
}

const updateButton = () => {
  if (totalTimers === 3) {
    startTimerButton.setAttribute('disabled', true)
  } else {
    startTimerButton.removeAttribute('disabled')
  }
  
  startTimerButton.textContent = `Start timer (${totalTimers}/3)`
}

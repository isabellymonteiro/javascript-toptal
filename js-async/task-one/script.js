const startTimerButton = document.querySelector('button')
const timers = document.getElementById('timers')

let totalTimers = 0

const getRandomSeconds = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

startTimerButton.addEventListener('click', () => {
  totalTimers++
  updateButton()

  const randomSeconds = getRandomSeconds(2, 9)

  startTimer(randomSeconds).then(doneString => {
    totalTimers--
    updateButton()
    
    const newDiv = document.createElement('div')
    newDiv.textContent = doneString

    timers.appendChild(newDiv)
  })
})

const startTimer = (seconds) => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Done in ${seconds} seconds!`)
    }, 1000 * seconds)
  })

const updateButton = () => {
  startTimerButton.disabled = totalTimers === 3
  startTimerButton.textContent = `Start timer (${totalTimers}/3)`
}

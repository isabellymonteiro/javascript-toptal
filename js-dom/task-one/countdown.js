export default class Countdown {
  constructor(conutdownValue, countdownItem) {
    this.hours = conutdownValue.hours
    this.minutes = conutdownValue.minutes
    this.seconds = conutdownValue.seconds
    this.timeRemaining = (conutdownValue.hours * 60 * 60) + (conutdownValue.minutes * 60) + (conutdownValue.seconds) // in seconds
    this.countdownItem = countdownItem
  }

  start() {
    let interval = setInterval(() => {
      if (this.timeRemaining === 0) {
        clearInterval(interval)
      } else {
        this.timeRemaining -= 1

        this.hours = Math.floor(this.timeRemaining / 60 / 60),
        this.minutes = Math.floor(this.timeRemaining / 60) % 60,
        this.seconds = Math.floor(this.timeRemaining % 60)
        
        if (this.hours < 10) this.hours = "0" + this.hours
        if (this.minutes < 10) this.minutes = "0" + this.minutes
        if (this.seconds < 10) this.seconds = "0" + this.seconds
        
        this.countdownItem.firstElementChild.textContent = `${this.hours}:${this.minutes}:${this.seconds}`
      }  
    }, 1000)

    this.countdownItem.lastElementChild.addEventListener("click", () => this.cancel(interval))
  }

  cancel(interval) {
    clearInterval(interval)
    this.countdownItem.remove()
  }
}

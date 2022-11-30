"use strict"

import Countdown from "./countdown.js"

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const countdownInputValue = new FormData(form).get("countdown-input")

  const [hours, minutes, seconds] = countdownInputValue.split(":")
  const conutdownValue = {
    hours: +hours,
    minutes: +minutes,
    seconds: +seconds
  }

  const countdownItem = document.createElement("li")
  const countdownText = document.createElement("p")
  countdownText.textContent = countdownInputValue
  const countdownCancelButton = document.createElement("button")
  countdownCancelButton.textContent = "Cancel"

  countdownCancelButton.classList.add("cancelButton")
  countdownCancelButton.type = "button"

  countdownItem.append(countdownText, countdownCancelButton)

  const newCountdown = new Countdown(conutdownValue, countdownItem)

  const countdowns = document.querySelector(".countdowns")
  countdowns.appendChild(newCountdown.countdownItem)

  newCountdown.start()
})

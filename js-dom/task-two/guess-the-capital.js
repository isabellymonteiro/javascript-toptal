import { shuffleAnswers } from './utils/general.js'
import { getIncorrectOptions, getRandomCountryData } from './utils/database.js'
import { 
  createElement, 
  createQuestionCard, 
  createControlButton, 
  createPlayerForm, 
  createTable 
} from './utils/dom.js'

const TOTAL_OPTIONS = 4

let correctAnswers = 0
let totalAnwers = 0
let correctAnswer = ''

const startButton = document.querySelector('#start-button')
const main = document.querySelector('main')
startButton.addEventListener('click', () => startGame())

const startGame = () => {
  startButton.remove()

  const questionData = getQuestion()
  const questionCard = createQuestionCard(questionData)
  const nextAnswerButton = createControlButton()

  nextAnswerButton.addEventListener('click', () => {
    if (totalAnwers <= 9) {
      updateQuestionData()
      if (totalAnwers === 9) nextAnswerButton.textContent = 'Show Result'
      totalAnwers += 1
    } else {
      const playerForm = createPlayerForm(showRanking)
      main.replaceChildren(playerForm)
    }
  })

  main.appendChild(questionCard)
  main.appendChild(nextAnswerButton)

  const questionList = document.querySelector('ul')

  questionList.addEventListener('click', (e) => {
    if (e.target instanceof HTMLButtonElement) {
      checkAnswer(e.target.textContent, correctAnswer)
    }
  })
}

const showRanking = (playerName) => {
  const players = localStorage.getItem('players')

  if (players) {
    const updatedPlayersList = [...(JSON.parse(players)), [playerName, correctAnswers]]
    localStorage.setItem('players', JSON.stringify(updatedPlayersList))
  } else {
    localStorage.setItem('players', JSON.stringify([[playerName, correctAnswers]]))
  }

  const sortedPlayers = (JSON.parse(localStorage.getItem('players'))).sort((a, b) => b[1] - a[1])

  const ranking = createTable()
  
  sortedPlayers.forEach((player) => {
    const playerRow = createElement('tr')
    const playerName = createElement('td')
    const playerCorrectAnswers = createElement('td')

    playerName.textContent = player[0]
    playerCorrectAnswers.textContent = player[1]

    playerRow.append(playerName, playerCorrectAnswers)
    ranking.appendChild(playerRow)
  })

  main.replaceChildren(ranking)
}

const updateQuestionData = () => {
  const newQuestionData = getQuestion()
  const questionTitle = document.querySelector('h2')
  const options = document.querySelectorAll('li')

  questionTitle.textContent = newQuestionData.countryData.country

  options.forEach((li, index) => {
    const buttonOption = li.firstElementChild

    buttonOption.textContent = newQuestionData.options[index]
    buttonOption.removeAttribute('disabled')

    if (li.classList.contains('option--right')) li.removeAttribute('class')
    if (li.classList.contains('option--wrong')) li.removeAttribute('class')
  })
}

const checkAnswer = (chosenOption, rightOption) => {
  const options = document.querySelectorAll('li')
  
  options.forEach(option => {
    const optionButton = option.firstElementChild
    if (optionButton.textContent === chosenOption) {
      if (chosenOption === rightOption) {
        option.classList.add('option--right')
        correctAnswers += 1
      } else option.classList.add('option--wrong')
    }
    optionButton.setAttribute('disabled', true)
  })
}

const getQuestion = () => {
  const countryData = getRandomCountryData()
  correctAnswer = countryData.city
  const incorrectOptions = getIncorrectOptions(TOTAL_OPTIONS - 1)

  const answerOptions = [countryData.city, ...incorrectOptions]
  shuffleAnswers(answerOptions)

  return {
    countryData: countryData,
    options: answerOptions
  }
}

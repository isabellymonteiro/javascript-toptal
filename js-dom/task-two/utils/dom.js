export const createElement = (element) => {
  return document.createElement(element)
}

export const createQuestionCard = (questionData) => {
  const fragment = new DocumentFragment()

  const questionCard = createElement('div')
  questionCard.classList.add('question-container')

  const answersList = createElement('ul')
  const countryTitle = createElement('h2')
  countryTitle.textContent = questionData.countryData.country

  questionCard.appendChild(countryTitle)

  questionData.options.forEach(option => {
    const li = createElement('li')
    const button = createElement('button')

    button.classList.add('option__button')
    button.textContent = option
    button.setAttribute('type', 'button')

    li.appendChild(button)
    answersList.appendChild(li)
  })

  questionCard.appendChild(answersList)
  fragment.appendChild(questionCard)

  return fragment
}

export const createControlButton = () => {
  const button = createElement('button')
  button.setAttribute('type', 'button')
  button.classList.add('controlButton')
  button.textContent = 'Next Question'

  return button
}

export const createPlayerForm = (callback) => {
  const form = createElement('form')
  const inputLabel = createElement('label')
  const input = createElement('input')
  const button = createElement('button')

  inputLabel.setAttribute('for', 'playerName')
  inputLabel.textContent = 'Type your name:'
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'playerName')
  button.textContent = 'Add to ranking'
  button.classList.add('form__button')
  
  form.append(inputLabel, input, button)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.remove()
    callback(input.value)
  })

  return form
}

export const createTable = () => {
  const ranking = createElement('table')
  const playerHeaderRow = createElement('tr')
  const playerHeaderName = createElement('th')
  const playerHeaderScore = createElement('th')

  playerHeaderName.textContent = 'Name'
  playerHeaderScore.textContent = 'Score'

  playerHeaderRow.append(playerHeaderName, playerHeaderScore)
  ranking.appendChild(playerHeaderRow)

  return ranking
}
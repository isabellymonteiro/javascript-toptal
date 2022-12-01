// return answersArray is not required, as it is in-place algorithm (the passed-in array as parameter is changed permanently)
export const shuffleAnswers = (answersArray) => {
  for (let i = answersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = answersArray[i]
    answersArray[i] = answersArray[j]
    answersArray[j] = temp
  }
}

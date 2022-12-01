import countryByCapital from '../data/country-by-capital.json' assert {type: 'json'}

export const getIncorrectOptions = (quantity) => {
  const incorrectOptions = []
  let currentIndex = 0
  
  const addIncorrectOptions = () => {
    while (currentIndex < quantity) {
      const randomCapital = getRandomCountryData(true)
      incorrectOptions.includes(randomCapital) ? addIncorrectOptions() : incorrectOptions.push(randomCapital)
      currentIndex++
    }
  }

  addIncorrectOptions()

  return incorrectOptions
}

export const getRandomCountryData = (onlyCapital = false) => {
  if (onlyCapital) {
    return countryByCapital[Math.floor(Math.random() * 245)].city ?? getRandomCountryData(true)
  } else {
    const randomCountryData = countryByCapital[Math.floor(Math.random() * 245)]
    return randomCountryData.city ? randomCountryData : getRandomCountryData()
  }
}


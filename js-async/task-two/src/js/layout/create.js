export const createCountryList = (allCountryData) => {
  allCountryData.forEach(countryData => createCountryCard(countryData))
}

const createCountryCard = (countryData) => {
  const template = document.getElementById('country__template')
  const clone = template.content.cloneNode(true)

  const contryLanguages = countryData.languages 
    ? Object.values(countryData.languages).join(', ') 
    : 'Unavailable'

  const countryCapitals = countryData.capital 
    ? countryData.capital.join(', ') 
    : 'Unavailable'

  const countryFlag = clone.querySelector('.country__flag')
  countryFlag.src = countryData.flags.svg
  countryFlag.alt = `${countryData.name.common} flag`

  clone.querySelector('.country__name').textContent = countryData.name.common
  clone.querySelector('.country__capitals').textContent = countryCapitals
  clone.querySelector('.country__continents').textContent = countryData.continents.join(', ')
  clone.querySelector('.country__languages').textContent = contryLanguages

  document.getElementById('country__list').appendChild(clone)
}
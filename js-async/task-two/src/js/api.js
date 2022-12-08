const URL = 'https://restcountries.com/v3.1'

export const getAllCountries = async () => {
  const response = await fetch(`${URL}/all`)
  
  if (!response.ok) throw new Error('Something went wrong getting coutries')

  const data = await response.json()

  return data
}

export const getByCountryName = async (countryName) => {
  const response = await fetch(`${URL}/name/${countryName}`)

  if (!response.ok) throw new Error('Something went wrong getting coutries')
  
  const data = await response.json()
  return data
}
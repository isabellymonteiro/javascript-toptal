import { getAllCountries, getByCountryName } from './api.js'
import { createCountryList } from './layout/create.js'
import { cleanList, cleanNotFound } from './layout/clean.js'
import { debounce } from './utils.js'

const form = document.querySelector('form')
const countryList = document.getElementById('country__list')
const searchInput = document.getElementById('search-input')


const renderCountries = async () => {
  cleanNotFound()

  try {
    const data = await getAllCountries()

    cleanList(countryList)
    createCountryList(data)
  } catch(error) {
    alert(error.message)
  }
}

renderCountries()

searchInput.addEventListener('keydown', debounce(() => {
  handleSearch()
}, 400))

form.addEventListener('submit', (e) => {
  e.preventDefault()
  handleSearch()
})

const handleSearch = () => {
  if (searchInput.value === '') {
    renderCountries()
  } else {
    filterBySearchTerm(searchInput.value)
  }
}

const filterBySearchTerm = async (searchTerm) => {
  cleanNotFound()

  try {
    const data = await getByCountryName(searchTerm)

    cleanList(countryList)
    createCountryList(data)
  } catch(error) {
    console.log('pegou')
    showNotFound()
  }
}

const showNotFound = () => {
  cleanNotFound()

  const noResultsFound = document.createElement('h2')
  noResultsFound.id = 'not-found'
  noResultsFound.textContent = 'No results found.'

  cleanList(countryList)
  document.getElementById('countries').appendChild(noResultsFound)
}
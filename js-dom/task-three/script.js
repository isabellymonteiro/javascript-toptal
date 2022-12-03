import moviesObject from './movies.json' assert {type: 'json'}

const template = document.getElementById('movieCard__template')
const moviesList = document.getElementById('movies')

moviesObject.movies.forEach(movie => {
  const { title, year, genres, director, actors, plot, posterUrl } = movie

  const clone = template.content.cloneNode(true)

  const movieImage =  clone.querySelector('.movieCard__img')
  movieImage.setAttribute('src', posterUrl )
  movieImage.setAttribute('img', title )

  clone.querySelector('.movieCard__year').textContent = year
  clone.querySelector('.movieCard__genres').textContent = [...genres].join(', ')
  clone.querySelector('.movieCard__title').textContent = title
  clone.querySelector('.movieCard__plot').textContent = plot
  clone.querySelector('.movieCard__director').textContent = `Director: ${director}`
  clone.querySelector('.movieCard__cast').textContent = `Cast: ${actors}`

  moviesList.appendChild(clone)

  movieImage.addEventListener('error', () => movieImage.setAttribute('src', './image/no-image-available.jpg'))
})

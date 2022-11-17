import { movies } from "./database.js"

// helper function
function checkFoundMoviesLength(foundMovies) {
  if (foundMovies.length >= 1) {
    return foundMovies
  } else {
    return "No movies found."
  }
}

export function getMoviesByYear(year) {
  const foundMovies = movies.filter(movie => movie.year === +year)

  return checkFoundMoviesLength(foundMovies)
}

export function getMoviesByGenre(genre) {
  const foundMovies = movies.filter(movie =>
    // find will return the first element found or undefined if it does not exist
    movie.genres.find(genreItem => genreItem === genre)
  )

  return checkFoundMoviesLength(foundMovies)
}

export function sumAllMoviesDuration() {
  const sum = movies.reduce(
    (accumulator, currentValue) => accumulator + currentValue.runtime,
    0
  )

  return sum
}


import { getMoviesByYear, getMoviesByGenre, sumAllMoviesDuration } from "./functions.js"

console.log("Movies by year:")
console.log("1986: ", getMoviesByYear(1986))
console.log("2007: ", getMoviesByYear("2007"))
console.log("2022: ", getMoviesByYear(2022))

console.log("Movies by Genre:")
console.log("Comedy: ",getMoviesByGenre("Comedy"))
console.log("Drama: ",getMoviesByGenre("Drama"))
console.log("Horror: ",getMoviesByGenre("Horror"))

console.log("Sum of all movies duration:", sumAllMoviesDuration())

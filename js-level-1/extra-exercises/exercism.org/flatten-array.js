// https://exercism.org/tracks/javascript/exercises/flatten-array
"use strict"

// primary solution
export const flatten = (list) => {
  return list.reduce((total, curr) => {
    if (curr === null) return total
    if (Array.isArray(curr)) return total.concat(flatten(curr))
    return total.concat(curr)
  }, [])
}

/* secondary solution
const flatten = (list) => {
  const flattenedList = []

  list.forEach(item => {
    if (item === null) return
    Array.isArray(item) ? flattenedList.push(...flatten(item)) : flattenedList.push(item)
  })

  return flattenedList
} 
*/

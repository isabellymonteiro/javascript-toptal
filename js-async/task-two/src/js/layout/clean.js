export const cleanList = (list) => {
  list.innerHTML = ''
}

export const cleanNotFound = () => {
  const notFound = document.getElementById('not-found')

  if (notFound) {
    notFound.remove()
  }
}
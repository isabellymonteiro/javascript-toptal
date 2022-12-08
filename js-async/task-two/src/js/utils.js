export const debounce = (callback, millisecondsDelay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback(args)
    }, millisecondsDelay)
  }
}
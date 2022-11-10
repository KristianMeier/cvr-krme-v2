export const getLocalStorage = (key, value) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return value
  }
}

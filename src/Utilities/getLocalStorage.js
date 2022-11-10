export const getLocalStorage = (key, valueIfEmpty) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return valueIfEmpty
  }
}

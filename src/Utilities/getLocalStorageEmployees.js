export const getLocalStorageEmployees = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  } else {
    return []
  }
}

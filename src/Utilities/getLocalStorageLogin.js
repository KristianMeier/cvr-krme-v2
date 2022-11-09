export const getLocalStorageLogin = (key) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return []
  }
}

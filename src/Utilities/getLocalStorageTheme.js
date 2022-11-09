export const getLocalStorageTheme = (key, theme) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return theme
  }
}

import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_LOCAL_STORAGE_KEY,
} from '../Constants/Constants'
import { getLocalStorage } from '../Utilities/getLocalStorage'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    getLocalStorage(THEME_LOCAL_STORAGE_KEY, LIGHT_THEME)
  )

  const toggleTheme = () => {
    if (theme === LIGHT_THEME) {
      setTheme(DARK_THEME)
    } else {
      setTheme(LIGHT_THEME)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

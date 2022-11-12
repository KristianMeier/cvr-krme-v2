import { useContext, useState } from 'react'
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

  const toggleTheme = () =>
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

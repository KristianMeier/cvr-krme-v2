import React, { useState, useEffect } from 'react'
import { getLocalStorageTheme } from '../../../Utilities/getLocalStorageTheme'

const localStorageKey = 'theme'
const initialTheme = 'light-theme'
const darkTheme = 'dark-theme'

export const ThemeButton = () => {
  const [theme, setTheme] = useState(
    getLocalStorageTheme(localStorageKey, initialTheme)
  )

  const toggleTheme = () => {
    if (theme === initialTheme) {
      setTheme(darkTheme)
    } else {
      setTheme(initialTheme)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem(localStorageKey, theme)
  }, [theme])

  return (
    <button className='theme-button' onClick={toggleTheme}>
      {theme === initialTheme ? 'Dark Theme' : 'Standard Theme'}
    </button>
  )
}

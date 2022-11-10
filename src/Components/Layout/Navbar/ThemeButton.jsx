import React, { useState, useEffect } from 'react'
import {
  DARK_THEME,
  LIGHT_THEME,
  THEME_LOCAL_STORAGE_KEY,
} from '../../../Constants/Constants'
import { getLocalStorageTheme } from '../../../Utilities/getLocalStorageTheme'

export const ThemeButton = () => {
  const [theme, setTheme] = useState(
    getLocalStorageTheme(THEME_LOCAL_STORAGE_KEY, LIGHT_THEME)
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
    <button className='theme-button' onClick={toggleTheme}>
      {theme === LIGHT_THEME ? 'Dark Theme' : 'Standard Theme'}
    </button>
  )
}

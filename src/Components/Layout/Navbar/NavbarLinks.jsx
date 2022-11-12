import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LIGHT_THEME,
  LOG_OUT_LOCAL_STORAGE_VALUE,
  MY_ACCOUNT_PATH,
  SIGN_IN_PAGE_PATH,
  THEME_LOCAL_STORAGE_KEY,
} from '../../../Constants/Constants'
import { useGlobalContext } from '../../../Context/Context'
import { useThemeContext } from '../../../Context/ThemeContext'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { login } = useGlobalContext()
  const { theme, toggleTheme } = useThemeContext()

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <button className='theme-button' onClick={() => toggleTheme()}>
          {theme === LIGHT_THEME ? 'Dark Theme' : 'Standard Theme'}
        </button>
        {login !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link to={MY_ACCOUNT_PATH}>My Account</Link>
        ) : (
          <Link to={SIGN_IN_PAGE_PATH}>Sign In</Link>
        )}
      </ul>
    </div>
  )
}

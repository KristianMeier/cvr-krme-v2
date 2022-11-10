import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { authLocalStorageKey } from '../../../Constants/Constants'
import { getLocalStorageLogin } from '../../../Utilities/getLocalStorageLogin'
import { ThemeButton } from './ThemeButton'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const login = getLocalStorageLogin(authLocalStorageKey)

  useEffect(() => {
    localStorage.setItem(authLocalStorageKey, login)
  }, [login])

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <ThemeButton />
        {login !== 'logged out' ? (
          <Link to='/myaccount'>My Account</Link>
        ) : (
          <Link to='/signinpage'>Sign In</Link>
        )}
      </ul>
    </div>
  )
}

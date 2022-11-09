import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../../Context/Context'
import { ThemeButton } from './ThemeButton'

const localStorageKey = 'login'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const navigate = useNavigate()
  const { loginStatus, logIn } = useGlobalContext()

  useEffect(() => {
    localStorage.setItem(localStorageKey, loginStatus)
  }, [loginStatus])

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <ThemeButton />
        {loginStatus === 'logged in' ? (
          <Link to='/myaccount'>My Account</Link>
        ) : (
          <button
            onClick={() => {
              logIn()
              navigate('/myaccount')
            }}
          >
            Sign In
          </button>
        )}
        <Link to='/signinpage'>Sign In TEMP</Link>
      </ul>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { LOG_OUT_LOCAL_STORAGE_VALUE } from '../../../Constants/Constants'
import { useGlobalContext } from '../../../Context/Context'
import { ThemeButton } from './ThemeButton'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { login } = useGlobalContext()

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <ThemeButton />
        {login !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link to='/myaccount'>My Account</Link>
        ) : (
          <Link to='/signinpage'>Sign In</Link>
        )}
      </ul>
    </div>
  )
}

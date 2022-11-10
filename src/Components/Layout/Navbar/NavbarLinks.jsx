import React from 'react'
import { Link } from 'react-router-dom'
import {
  LOG_OUT_LOCAL_STORAGE_VALUE,
  MY_ACCOUNT_PATH,
  SIGN_IN_PAGE_PATH,
} from '../../../Constants/Constants'
import { useGlobalContext } from '../../../Context/Context'
import { ThemeButton } from './ThemeButton'

export const NavbarLinks = ({ linksContainerRef, linksRef }) => {
  const { login } = useGlobalContext()

  return (
    <div className='links-container' ref={linksContainerRef}>
      <ul className='links' ref={linksRef}>
        <ThemeButton />
        {login !== LOG_OUT_LOCAL_STORAGE_VALUE ? (
          <Link to={MY_ACCOUNT_PATH}>My Account</Link>
        ) : (
          <Link to={SIGN_IN_PAGE_PATH}>Sign In</Link>
        )}
      </ul>
    </div>
  )
}

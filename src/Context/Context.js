import { useState, useContext } from 'react'
import { createContext } from 'react'

export const getLocalStorageLogin = (key) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key)
  } else {
    return []
  }
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const localStorageKey = 'login'
  const [loginStatus, setLoginStatus] = useState(
    getLocalStorageLogin(localStorageKey)
  )

  const logIn = () => {
    setLoginStatus('logged in')
    localStorage.setItem(localStorageKey, loginStatus)
  }

  const logOut = () => {
    setLoginStatus('logged out')
    localStorage.setItem(localStorageKey, loginStatus)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        logIn,
        logOut,
        loginStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

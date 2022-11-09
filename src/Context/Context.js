import { useState, useContext } from 'react'
import { createContext } from 'react'
import { AuthLocalStorageKey } from '../Constants/Constants'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const logIn = (object) => {
    const stringyfiedObject = JSON.stringify(object)
    localStorage.setItem(AuthLocalStorageKey, stringyfiedObject)
  }

  const logOut = () => {
    localStorage.removeItem(AuthLocalStorageKey)
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

import { authLocalStorageKey } from '../Constants/Constants'

export const logOut = () => {
  localStorage.removeItem(authLocalStorageKey)
}

export const logIn = (object) => {
  const stringyfiedObject = JSON.stringify(object)
  localStorage.setItem(authLocalStorageKey, stringyfiedObject)
}

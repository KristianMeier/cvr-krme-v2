import { Navigate } from 'react-router-dom'
import { authLocalStorageKey } from '../../../Constants/Constants'
import { getLocalStorageLogin } from '../../../Utilities/getLocalStorageLogin'

export const ProtectedRoute = ({ children }) => {
  const loginStatus = getLocalStorageLogin(authLocalStorageKey)
  if (loginStatus === 'logged out') return <Navigate to='/noaccess' />
  return children
}

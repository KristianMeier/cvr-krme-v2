import { Navigate } from 'react-router-dom'
import {
  LOG_OUT_LOCAL_STORAGE_VALUE,
  NO_ACCESS_PATH,
} from '../../../Constants/Constants'
import { getLocalStorageLogin } from '../../../Utilities/Auth'

export const ProtectedRoute = ({ children }) => {
  const loginStatus = getLocalStorageLogin()
  if (loginStatus === LOG_OUT_LOCAL_STORAGE_VALUE)
    return <Navigate to={NO_ACCESS_PATH} />
  return children
}

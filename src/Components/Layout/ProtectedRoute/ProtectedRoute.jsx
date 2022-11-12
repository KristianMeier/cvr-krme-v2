import { Navigate } from 'react-router-dom'
import {
  AUTH_LOCAL_STORAGE_KEY,
  LOG_OUT_LOCAL_STORAGE_VALUE,
  NO_ACCESS_PATH,
} from '../../../Constants/Constants'
import { getLocalStorage } from '../../../Utilities/getLocalStorage'

export const ProtectedRoute = ({ children }) => {
  const loginStatus = getLocalStorage(
    AUTH_LOCAL_STORAGE_KEY,
    LOG_OUT_LOCAL_STORAGE_VALUE
  )
  return loginStatus === LOG_OUT_LOCAL_STORAGE_VALUE ? (
    <Navigate to={NO_ACCESS_PATH} />
  ) : (
    children
  )
}

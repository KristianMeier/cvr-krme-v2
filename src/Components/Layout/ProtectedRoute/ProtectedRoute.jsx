import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../../../Context/Context'

export const ProtectedRoute = ({ children }) => {
  const { loginStatus } = useGlobalContext()
  if (loginStatus === 'logged out') {
    return <Navigate to='/noaccess' />
  }
  return children
}
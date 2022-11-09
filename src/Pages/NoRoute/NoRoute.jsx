import { useNavigate, useParams } from 'react-router-dom'
import { Account } from '../../Components/Other/Account'

export const NoRoute = () => {
  const { routeParams } = useParams()
  const navigate = useNavigate()

  return (
    <Account
      title={`You tried to access: /${routeParams}`}
      onClick={() => navigate('/')}
      btnTitle='Frontpage'
    />
  )
}

import { useNavigate } from 'react-router'
import { Account } from '../../Components/Other/Account'

export const NoAccess = () => {
  const navigate = useNavigate()

  return (
    <Account
      title='You need to sign in to acces your account'
      onClick={() => {
        navigate('/signinpage')
      }}
      btnTitle='Sign In'
    />
  )
}

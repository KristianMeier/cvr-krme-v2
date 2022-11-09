import { useNavigate } from 'react-router'
import { Account } from '../../Components/Account/Account'
import { useGlobalContext } from '../../Context/Context'

export const NoAccess = () => {
  const { logIn } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <Account
      title='You need to sign in to acces your account'
      onClick={() => {
        logIn()
        navigate('/myaccount')
      }}
      btnTitle='Sign In'
    />
  )
}

import { useNavigate } from 'react-router'
import { Account } from '../../Components/Other/Account'
import { useGlobalContext } from '../../Context/Context'

export const NoAccess = () => {
  const { logIn } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <Account
      title='Sign In Beaneath'
      onClick={() => {
        logIn()
        navigate('/myaccount')
      }}
      btnTitle='Sign In'
    />
  )
}

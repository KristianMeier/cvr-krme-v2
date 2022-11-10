import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import { authLocalStorageKey } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/Context'
import { logOut } from '../../Utilities/Auth'
import { getLocalStorageLogin } from '../../Utilities/getLocalStorageLogin'

export const MyAccount = () => {
  const { openModal } = useGlobalContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorageLogin(authLocalStorageKey)
  const loginName = JSON.parse(loginLocalStorageString).newName

  return (
    <>
      <Account
        title={`Welcome ${loginName}`}
        onClick={() => {
          logOut()
          navigate('/')
          openModal()
        }}
        btnTitle='Log Out'
      />
      <AddEmployees />
    </>
  )
}

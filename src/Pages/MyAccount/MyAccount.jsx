import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import { AuthLocalStorageKey } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/Context'
import { getLocalStorageLogin } from '../../Utilities/getLocalStorageLogin'

export const MyAccount = () => {
  const { logOut, openModal } = useGlobalContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorageLogin(AuthLocalStorageKey)
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

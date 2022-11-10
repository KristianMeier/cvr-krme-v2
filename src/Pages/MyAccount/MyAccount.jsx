import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import { useGlobalContext } from '../../Context/Context'
import { getLocalStorageLogin } from '../../Utilities/Auth'

export const MyAccount = () => {
  const { openModal, logOut } = useGlobalContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorageLogin()
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

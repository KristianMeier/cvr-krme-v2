import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'
import { LANDING_PAGE_PATH } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/Context'
import { getLocalStorageLogin } from '../../Utilities/getLocalStorageLogin'

export const MyAccount = () => {
  const { openModal, logOut } = useGlobalContext()
  const navigate = useNavigate()

  const loginLocalStorageString = getLocalStorageLogin()
  const loginName = JSON.parse(loginLocalStorageString).name

  return (
    <>
      <Account
        title={`Welcome ${loginName ? loginName : 'my friend'}`}
        onClick={() => {
          logOut()
          navigate(LANDING_PAGE_PATH)
          openModal()
        }}
        btnTitle='Log Out'
      />
      <AddEmployees />
    </>
  )
}

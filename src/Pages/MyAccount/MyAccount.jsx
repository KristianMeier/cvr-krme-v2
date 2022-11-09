import { useNavigate } from 'react-router'
import { Account } from '../../Components/Account/Account'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'

import { useGlobalContext } from '../../Context/Context'

export const MyAccount = () => {
  const { openModal, logOut } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <>
      <Account
        title='Logged In'
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

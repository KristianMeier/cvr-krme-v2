import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'

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

import { useNavigate } from 'react-router'
import { AddEmployees } from '../../Components/AddEmployess/AddEmployees'
import { Account } from '../../Components/Other/Account'

import { useGlobalContext } from '../../Context/Context'

const localStorageKey = 'usenamePassword'

export const MyAccount = () => {
  const { openModal, logOut, logOutNew } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <>
      <Account
        title='Logged In'
        onClick={() => {
          logOutNew(localStorageKey)
          navigate('/')
          openModal()
        }}
        btnTitle='Log Out'
      />
      <AddEmployees />
    </>
  )
}

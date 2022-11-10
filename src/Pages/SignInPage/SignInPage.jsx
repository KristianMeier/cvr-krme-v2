import { useState } from 'react'
import { useNavigate } from 'react-router'
import { MY_ACCOUNT_PATH } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/Context'
import { Form } from '../../Components/Other/Form'

export const SignInPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { logIn } = useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const localStorageId = new Date().getTime().toString()
    const user = {
      localStorageId,
      name,
      password,
    }
    logIn(user)
    navigate(MY_ACCOUNT_PATH)
    setName('')
    setPassword('')
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className='sign-in-page'>
      <h1>Login</h1>
      <article className='sign-in-container'>
        <Form
          typeOne='text'
          typeTwo='text'
          idNameOne='name'
          idNameTwo='password'
          placeholderOne='Insert name...'
          placeholderTwo='Insert password...'
          valueOne={name}
          valueTwo={password}
          onChangeOne={onChangeName}
          onChangeTwo={onChangePassword}
          onClick={handleSubmit}
          btnTitle='Sign In'
        />
      </article>
    </div>
  )
}

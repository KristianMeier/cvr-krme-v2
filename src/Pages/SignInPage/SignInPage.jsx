import { useState } from 'react'
import { useNavigate } from 'react-router'
import { MY_ACCOUNT_PATH } from '../../Constants/Constants'
import { useGlobalContext } from '../../Context/Context'

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
    <div className='add-employess'>
      <h1>Login</h1>
      <div className='container'>
        <article className='add-employees-input'>
          <form className='form-container'>
            <div className='form-control'>
              <input
                className='input'
                type='text'
                id='name'
                name='name'
                placeholder='Insert name...'
                value={name}
                onChange={onChangeName}
              />
              <input
                className='input'
                type='text'
                id='password'
                name='parssword'
                placeholder='Insert password...'
                value={password}
                onChange={onChangePassword}
              />
              <button type='submit' onClick={handleSubmit}>
                Sign In
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  )
}

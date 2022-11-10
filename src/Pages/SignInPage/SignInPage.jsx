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
    setPassword(e.target.value)
  }

  const onChangeAge = (e) => {
    setName(e.target.value)
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
                id='firstName'
                name='firstName'
                placeholder='Insert name...'
                value={password}
                onChange={onChangeName}
              />
              <input
                className='input'
                type='number'
                id='age'
                name='age'
                placeholder='Insert age...'
                value={name}
                onChange={onChangeAge}
              />
              <button type='submit' onClick={handleSubmit}>
                Add Employee
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  )
}

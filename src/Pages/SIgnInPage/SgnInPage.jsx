import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useGlobalContext } from '../../Context/Context'

export const SignInPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  // const employees = getLocalStorageLogin(localStorageKey)

  const { logIn } = useGlobalContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = new Date().getTime().toString()
    const johnnyBeGood = {
      newId: id,
      newAge: age,
      newName: name,
    }
    logIn(johnnyBeGood)
    navigate('/myaccount')
    setAge('')
    setName('')
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeAge = (e) => {
    setAge(e.target.value)
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
                value={name}
                onChange={onChangeName}
              />
              <input
                className='input'
                type='number'
                id='age'
                name='age'
                placeholder='Insert age...'
                value={age}
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

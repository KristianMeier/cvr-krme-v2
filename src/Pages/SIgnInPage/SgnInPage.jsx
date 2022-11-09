import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useGlobalContext } from '../../Context/Context'
import { getLocalStorageArray } from '../../Utilities/getLocalStorageArray'

const localStorageKey = 'usenamePassword'

export const SignInPage = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [employees, setEmployees] = useState(
    getLocalStorageArray(localStorageKey)
  )
  const { logIn } = useGlobalContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      localStorageId: new Date().getTime().toString(),
      title: name,
      age: age,
    }
    setEmployees([...employees, newEmployee])
    setName('')
    setAge('')
    logIn()
    navigate('/myaccount')
  }

  const clearLocalStorage = (localStorageId) => {
    setEmployees(
      employees.filter((item) => item.localStorageId !== localStorageId)
    )
    //clear localStorage
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(employees))
  }, [employees])

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

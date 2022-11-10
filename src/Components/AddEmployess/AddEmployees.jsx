import { useState, useEffect } from 'react'
import { EMPLOYEE_LOCAL_STORAGE_KEY } from '../../Constants/Constants'
import { getLocalStorageEmployees } from '../../Utilities/getLocalStorageEmployees'
import { Form } from '../Other/Form'
import { AddEmployeesOutput } from './AddEmployeesOutput'

export const AddEmployees = () => {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [employees, setEmployees] = useState(
    getLocalStorageEmployees(EMPLOYEE_LOCAL_STORAGE_KEY)
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEmployee = {
      localStorageId: new Date().getTime().toString(),
      name,
      title,
    }
    setEmployees([...employees, newEmployee])
    setName('')
    setTitle('')
  }

  const removeEmployee = (localStorageId) => {
    setEmployees(
      employees.filter((item) => item.localStorageId !== localStorageId)
    )
  }

  useEffect(() => {
    localStorage.setItem(EMPLOYEE_LOCAL_STORAGE_KEY, JSON.stringify(employees))
  }, [employees])

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className='add-employess'>
      <h1>Grant employees access to Virk.dk</h1>
      <div className='container'>
        <article className='add-employees-input'>
          <Form
            typeOne='text'
            typeTwo='text'
            idNameOne='name'
            idNameTwo='title'
            placeholderOne='Insert name...'
            placeholderTwo='Insert title...'
            valueOne={name}
            valueTwo={title}
            onChangeOne={onChangeName}
            onChangeTwo={onChangeTitle}
            onClick={handleSubmit}
            btnTitle='Add Employee'
          />
        </article>
        <AddEmployeesOutput removeEmployee={removeEmployee} list={employees} />
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { EMPLOYEE_LOCAL_STORAGE_KEY } from '../../Constants/Constants'
import { getLocalStorageEmployees } from '../../Utilities/getLocalStorageEmployees'
import { AddEmployeesInput } from './AddEmployeesInput'
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
        <AddEmployeesInput
          name={name}
          title={title}
          onChangeName={onChangeName}
          onChangeTitle={onChangeTitle}
          handleSubmit={handleSubmit}
        />
        <AddEmployeesOutput removeEmployee={removeEmployee} list={employees} />
      </div>
    </div>
  )
}

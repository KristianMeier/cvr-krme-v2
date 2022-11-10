import { useState, useEffect } from 'react'
import { EMPLOYEE_LOCAL_STORAGE_KEY } from '../../Constants/Constants'
import { getLocalStorageArray } from '../../Utilities/getLocalStorageArray'
import { AddEmployeesInput } from './AddEmployeesInput'
import { AddEmployeesOutput } from './AddEmployeesOutput'

export const AddEmployees = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [employees, setEmployees] = useState(
    getLocalStorageArray(EMPLOYEE_LOCAL_STORAGE_KEY)
  )

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
  }

  const removeItem = (localStorageId) => {
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

  const onChangeAge = (e) => {
    setAge(e.target.value)
  }

  return (
    <div className='add-employess'>
      <h1>Grant employees access to Virk.dk</h1>
      <div className='container'>
        <AddEmployeesInput
          name={name}
          age={age}
          onChangeName={onChangeName}
          onChangeAge={onChangeAge}
          handleSubmit={handleSubmit}
        />
        <AddEmployeesOutput removeItem={removeItem} list={employees} />
      </div>
    </div>
  )
}

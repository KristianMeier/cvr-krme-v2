import { useState, useEffect } from 'react'
import { getLocalStorageArray } from '../../Utilities/getLocalStorageArray'
import { AddEmployeesInput } from './AddEmployeesInput'
import { AddEmployeesOutput } from './AddEmployeesOutput'

const localStorageKey = 'employees'

export const AddEmployees = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [employees, setEmployees] = useState(
    getLocalStorageArray(localStorageKey)
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
    localStorage.setItem(localStorageKey, JSON.stringify(employees))
  }, [employees])

  return (
    <div className='add-employess'>
      <h1>Grant employees access to Virk.dk</h1>
      <div className='container'>
        <AddEmployeesInput
          name={name}
          age={age}
          onChangeName={(e) => setName(e.target.value)}
          onChangeAge={(e) => setAge(e.target.value)}
          handleSubmit={handleSubmit}
        />
        <AddEmployeesOutput removeItem={removeItem} list={employees} />
      </div>
    </div>
  )
}

export const AddEmployeesInput = ({
  name,
  age,
  onChangeName,
  onChangeAge,
  handleSubmit,
}) => {
  return (
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
  )
}

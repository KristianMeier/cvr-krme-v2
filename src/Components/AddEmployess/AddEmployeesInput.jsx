export const AddEmployeesInput = ({
  name,
  title,
  onChangeName,
  onChangeTitle,
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
            type='text'
            id='title'
            name='title'
            placeholder='Insert title...'
            value={title}
            onChange={onChangeTitle}
          />
          <button type='submit' onClick={handleSubmit}>
            Add Employee
          </button>
        </div>
      </form>
    </article>
  )
}

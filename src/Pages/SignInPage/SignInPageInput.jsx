import React from 'react'

export const SignInPageInput = () => {
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

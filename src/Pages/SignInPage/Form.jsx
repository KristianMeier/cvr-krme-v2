import React from 'react'
import { InputField } from './InputField'

export const Form = ({
  typeOne,
  idNameOne,
  placeholderOne,
  valueOne,
  onChangeOne,
  typeTwo,
  idNameTwo,
  placeholderTwo,
  valueTwo,
  onChangeTwo,
  onClick,
  btnTitle,
}) => {
  return (
    <form className='form-container'>
      <div className='form-control'>
        <InputField
          type={typeOne}
          idName={idNameOne}
          placeholder={placeholderOne}
          value={valueOne}
          onChange={onChangeOne}
        />
        <InputField
          type={typeTwo}
          idName={idNameTwo}
          placeholder={placeholderTwo}
          value={valueTwo}
          onChange={onChangeTwo}
        />
        <button type='submit' onClick={onClick}>
          {btnTitle}
        </button>
      </div>
    </form>
  )
}

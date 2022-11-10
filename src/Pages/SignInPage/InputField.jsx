export const InputField = ({ type, idName, placeholder, value, onChange }) => {
  return (
    <input
      className='input'
      type={type}
      id={idName}
      name={idName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

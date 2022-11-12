export const InputField = ({ type, idName, placeholder, value, onChange }) => (
  <input
    className='input-field'
    type={type}
    id={idName}
    name={idName}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

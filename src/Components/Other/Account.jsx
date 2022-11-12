export const Account = ({ onClick, title, btnTitle }) => (
  <div className='my-account'>
    <h1> {title} </h1>
    <button onClick={onClick}>{btnTitle}</button>
  </div>
)

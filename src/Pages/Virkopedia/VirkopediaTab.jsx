export const VirkopediaTab = ({ heading, index, value, setValue }) => {
  return (
    <div className='virkopedia-tab'>
      <button
        onClick={() => setValue(index)}
        className={`article-btn ${index === value && 'active-btn'}`}
      >
        {heading}
      </button>
    </div>
  )
}

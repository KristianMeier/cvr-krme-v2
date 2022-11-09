export const SearchPagination = ({ pageNumbers, setPage }) => {
  return (
    <div className='search-pagination'>
      <ul>
        {pageNumbers.map((pgNumber, index) => (
          <li key={index}>
            <button
              className='pagination-numbers'
              onClick={() => setPage(pgNumber)}
            >
              {pgNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

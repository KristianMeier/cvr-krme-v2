import { Link } from 'react-router-dom'
import { SearchDataConv } from './SearchDataConv'

export const SearchCompany = ({ company }) => {
  const convertedData = SearchDataConv({ ...company })
  const { arrayIndex } = company

  return (
    <Link className='search-company' to={`/company/${arrayIndex}`}>
      <article className='search-article'>
        {convertedData.map((item) => {
          const { title, paragraphOne, paragraphTwo } = item
          return (
            <div key={title} className='search-content'>
              <h4> {title} </h4>
              <p> {paragraphOne} </p>
              <p>{paragraphTwo} </p>
            </div>
          )
        })}
      </article>
    </Link>
  )
}

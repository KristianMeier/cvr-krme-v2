import React, { useEffect, useState } from 'react'
import { RECORDS_PER_PAGE as COMPANIES_PER_PAGE } from '../../Constants/Constants'
import { JsData } from '../../Data/Data'
import { SearchCompany } from './SearchCompany'
import { SearchPagination } from './SearchPagination'

const allCompanies = JsData.searchData.companies
const startPages = Math.ceil(allCompanies.length / COMPANIES_PER_PAGE)

export const Search = () => {
  const [searchField, setSearchField] = useState('')
  const [nPages, setNPages] = useState(startPages)
  const [companies, setCompanies] = useState([])
  const [page, setPage] = useState(1)
  const [noOfReturnedCompanies, setNoOfReturnedCompanies] = useState(
    allCompanies.length
  )

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  useEffect(() => {
    const filteredCompanies = allCompanies.filter((person) => {
      return (
        person.companyName.toLowerCase().includes(searchField.toLowerCase()) ||
        person.address.toLowerCase().includes(searchField.toLowerCase()) ||
        person.postNoCity.toLowerCase().includes(searchField.toLowerCase())
      )
    })

    setNoOfReturnedCompanies(filteredCompanies.length)

    const firstElement = page * COMPANIES_PER_PAGE - COMPANIES_PER_PAGE
    const lastElement = page * COMPANIES_PER_PAGE
    const paginatedResults = filteredCompanies.slice(firstElement, lastElement)
    setCompanies(paginatedResults)

    const filteredPageNumbers = Math.ceil(
      filteredCompanies.length / COMPANIES_PER_PAGE
    )
    setNPages(filteredPageNumbers)
  }, [page, searchField])

  const handleChange = (e) => setSearchField(e.target.value)

  return (
    <div className='search'>
      <section>
        <div className='title'>
          <h1>Search the CVR</h1>
        </div>
        <div>
          <input
            type='search'
            placeholder='Search for the company here...'
            onChange={handleChange}
          />
        </div>
        {noOfReturnedCompanies === 0 ? (
          <h1>No companies found</h1>
        ) : (
          companies.map((company) => (
            <SearchCompany key={company.arrayIndex} company={company} />
          ))
        )}
        <SearchPagination pageNumbers={pageNumbers} setPage={setPage} />
      </section>
    </div>
  )
}

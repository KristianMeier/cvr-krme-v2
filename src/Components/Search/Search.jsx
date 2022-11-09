import React, { useEffect, useState } from 'react'
import { JsData } from '../../Data/Data'
import { SearchCompany } from './SearchCompany'
import { SearchPagination } from './SearchPagination'

const allCompanies = JsData.searchData.companies
const recordsPerPage = 3
const startPages = Math.ceil(allCompanies.length / recordsPerPage)

export const Search = () => {
  const [searchField, setSearchField] = useState('')
  const [nPages, setNPages] = useState(startPages)
  const [companies, setCompanies] = useState([])
  const [page, setPage] = useState(1)

  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

  useEffect(() => {
    const filteredCompanies = allCompanies.filter((person) => {
      return (
        person.companyName.toLowerCase().includes(searchField.toLowerCase()) ||
        person.address.toLowerCase().includes(searchField.toLowerCase()) ||
        person.postNoCity.toLowerCase().includes(searchField.toLowerCase())
      )
    })

    const firstElement = page * recordsPerPage - recordsPerPage
    const lastElement = page * recordsPerPage
    const paginatedResults = filteredCompanies.slice(firstElement, lastElement)
    setCompanies(paginatedResults)

    const filteredPageNumbers = Math.ceil(
      filteredCompanies.length / recordsPerPage
    )
    setNPages(filteredPageNumbers)
  }, [page, searchField])

  const handleChange = (e) => {
    setSearchField(e.target.value)
    console.log(companies)
  }

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
        {companies.length === 0 ? (
          <h1>No companies found</h1>
        ) : (
          companies.map((company) => {
            return <SearchCompany key={company.arrayIndex} company={company} />
          })
        )}
        <SearchPagination pageNumbers={pageNumbers} sePage={setPage} />
      </section>
    </div>
  )
}

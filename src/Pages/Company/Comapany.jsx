import React from 'react'
import { useParams } from 'react-router-dom'
import { JsData } from '../../Data/Data'
import { CompanyInfo } from './CompanyInfo'
import { CompanyTable } from './CompanyTable'

export const Company = () => {
  const { arrayIndex } = useParams()

  const tableData = JsData.searchData.companies[arrayIndex]
  const companyinfoData = JsData.searchData.companyinfoTitles

  return !tableData ? (
    <h1>No companies found...</h1>
  ) : (
    <section className='company-page'>
      <h1> {tableData.companyName} </h1>
      <CompanyTable company={tableData} />
      <div className='all-companies-info'>
        {companyinfoData.map((item) => (
          <CompanyInfo key={item} title={item} info={JsData.lorem} />
        ))}
      </div>
    </section>
  )
}

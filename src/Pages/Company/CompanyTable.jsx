import { CompanyTableDataConv } from './CompanyDataConv'

export const CompanyTable = ({ company }) => {
  const rowData = CompanyTableDataConv({ ...company })

  return (
    <table className='company-table'>
      <tbody>
        {rowData.map((item, index) => {
          const { title, field } = item
          return (
            <tr key={index}>
              <td> {title} </td>
              <td>{field}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

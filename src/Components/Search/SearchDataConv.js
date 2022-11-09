export const SearchDataConv = ({
  cvrNumber,
  companyName,
  address,
  status,
  companyType,
  postNoCity,
}) => {
  const rowData = [
    { title: companyName, paragraphOne: address, paragraphTwo: postNoCity },
    { title: 'Cvr-number', paragraphOne: cvrNumber },
    { title: 'Status', paragraphOne: status },
    { title: 'Company Type', paragraphOne: companyType },
  ]
  return rowData
}

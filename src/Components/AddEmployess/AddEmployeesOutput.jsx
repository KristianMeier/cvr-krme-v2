export const AddEmployeesOutput = ({ list, removeItem }) => {
  return (
    <article className='output'>
      {list.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
            {list.map((item, index) => {
              const { localStorageId, title, age } = item
              return (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{age}</td>
                  <td>
                    <button
                      className='remove-btn'
                      onClick={() => removeItem(localStorageId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h3>There are no employees added</h3>
      )}
    </article>
  )
}

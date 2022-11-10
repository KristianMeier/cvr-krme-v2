export const AddEmployeesOutput = ({ list, removeEmployee }) => {
  return (
    <article className='output'>
      {list.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Remove</th>
            </tr>
            {list.map((item, index) => {
              const { localStorageId, title, name } = item
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{title}</td>
                  <td>
                    <button
                      className='remove-btn'
                      onClick={() => removeEmployee(localStorageId)}
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

export const AddEmployeesOutput = ({ list, removeEmployee }) => (
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
            const { localStorageId, name, title } = item
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
      <div className='text-container'>
        <h3>There are no employees with access.</h3>
      </div>
    )}
  </article>
)

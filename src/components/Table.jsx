import React from 'react'

const Table = ({ routes, cols }) => {
  const header = cols.map((col) => {
    return <th key={col.name}>{col.name}</th>;
  })

  const body = routes.map((row) => { // for each row... row = obj
    const rows = cols.map((col) => { // create the data in 3 cols
      const val = row[col.property];
      return <td key={col.property + val}>{val}</td>
    })
    // insert the data (rows) into the row
    return <tr key={Object.values(row).join(':')}>{rows}</tr>
  })

  return (
    <div>
      <table className='routes-table'>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  )
}

export default Table;
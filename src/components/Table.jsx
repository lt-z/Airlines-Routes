import React, {useState} from 'react'

const Table = ({ routes, columns, format, perPage = 25 }) => {
  const [page, setPage] = useState(0);

  const header = columns.map((col) => {
    return <th key={col.name}>{col.name}</th>;
  });

  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  }

  const start = page * perPage;
  const end = start + perPage;

  const body = routes.slice(start, end).map((row) => { // for each row... row = obj
    const rows = columns.map((col) => { // create the data in 3 cols
      const val = row[col.property];
      return <td key={col.property + val}>{format(col.property, val)}</td>
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
      <div className="pagination">
        <p>
          Showing {start + 1}-{end} of {routes.length} routes.
        </p>
        <p>
          <button onClick={previousPage} disabled={page === 0}>Previous Page</button>
          <button onClick={nextPage} disabled={end >= routes.length}>Next Page</button>
        </p>
      </div>
    </div>
  )
}

export default Table;
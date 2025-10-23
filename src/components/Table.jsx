import TableItem from "./TableItem"

const Table = () => {
  return (
    <div className='overflow-x-auto mx-auto py-10 w-3/4'>
      <table className='table'>
        <thead className='text-xl font-bold'>
          <tr>
            <th></th>
            <th>Comment</th>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Sum</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <TableItem />
          <TableItem />
          <TableItem />
        </tbody>
      </table>
    </div>
  )
}

export default Table

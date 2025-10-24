import { useSelector } from "react-redux"
import TableItem from "./TableItem"
import { selectTransactions } from "../redux/tracker/transactionsSlice"
import { Link } from "react-router-dom"

const Table = () => {
  const transactions = useSelector(selectTransactions)

  return (
    <div className='overflow-x-auto mx-auto py-10 w-3/4'>
      {!transactions.length && (
        <p className='text-center text-xl '>
          There are not any transaction yet!
          <Link to='/add-transaction' className='text-teal-100 hover:underline'>
            Add now!
          </Link>
        </p>
      )}
      {transactions && !!transactions.length && (
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
            {transactions?.map((item, idx) => (
              <TableItem key={item.id} item={item} idx={idx} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table

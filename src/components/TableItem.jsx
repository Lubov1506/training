import moment from "moment"
import { useDispatch } from "react-redux"
import { deleteTransaction } from "../redux/tracker/transactionsSlice"
import clsx from "clsx"

const TableItem = ({item, idx}) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <th>{idx+1}</th>
      <td>{item.comment}</td>
      <td>{item.type}</td>
      <td>{item.category}</td>
      <td>{moment(item.date).format('DD-MM-YY')}</td>
      <td className={clsx('font-bold text-xl',item.type === 'Income'? 'text-teal-400' : 'text-error')}>{Math.abs(item.sum)}</td>
      <td className='flex gap-2'>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-error' onClick={()=>dispatch(deleteTransaction(item.id))}>X</button>
      </td>
    </tr>
  )
}

export default TableItem

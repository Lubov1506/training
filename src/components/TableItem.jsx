const TableItem = () => {
  return (
    <tr>
      <th>1</th>
      <td>Products</td>
      <td>Expense</td>
      <td>Food</td>
      <td>20.02.2002</td>
      <td>150</td>
      <td className='flex gap-2'>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-error'>X</button>
      </td>
    </tr>
  )
}

export default TableItem

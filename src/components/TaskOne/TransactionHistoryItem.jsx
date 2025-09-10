import React from "react"
import toCapitalize from "../../helpers/toCapitalize"
import clsx from "clsx"

const TransactionHistoryItem = ({ type, amount, currency,classname }) => {
  return (
    <tr className={clsx('border-1', classname)}>
      <td>{toCapitalize(type)}</td>
      <td className="text-center">{amount}</td>
      <td className="text-center">{currency}</td>
    </tr>
  )
}

export default TransactionHistoryItem

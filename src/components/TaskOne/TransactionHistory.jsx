import React from "react"
import TransactionHistoryItem from "./TransactionHistoryItem"

const TransactionHistory = ({ items }) => {
  return (
    <table className="w-[400px] border-1 my-2" >
      <thead className="bg-black text-white ">
        <tr >
          <th >Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items?.map(({ id, type, amount, currency }, idx) => {

          return (
            <TransactionHistoryItem
              classname={idx % 2 ? "bg-gray-300" : ""}
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default TransactionHistory

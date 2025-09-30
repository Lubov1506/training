import React from "react"
import {toCapitalize} from "../../helpers/toCapitalize"
const StatusItem = ({ label, value }) => {
  return (
    <li className='flex flex-col items-center border-2 flex-1 p-2'>
      <span>{toCapitalize(label)}</span>
      <span>{value}</span>
    </li>
  )
}

export default StatusItem

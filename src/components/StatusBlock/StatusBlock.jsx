import React from "react"
import StatusItem from "../StatusItem/StatusItem"

const StatusBlock = ({ stats }) => {
  return (
    <ul className="flex justify-between w-full bg-gray-300">
      {Object.entries(stats).map(([key, value]) => (
        <StatusItem key={key} label={key} value={value} />
      ))}
    </ul>
  )
}

export default StatusBlock

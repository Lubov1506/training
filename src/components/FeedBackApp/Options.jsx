import React from "react"
import { toCapitalize } from "../../helpers"

const Options = ({ state, onClick }) => {
  return (
    <div className="flex gap-1"> 
      {Object.entries(state).map(([key]) => (
        <button className="border-1 rounded-sm p-1" key={key} onClick={() => onClick(key)}>
          {toCapitalize(key)}
        </button>
      ))}
    </div>
  )
}

export default Options

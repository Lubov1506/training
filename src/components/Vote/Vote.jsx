import React, { useState } from "react"

const Vote = () => {
  const [options, setOptions] = useState({
    windows: 0,
    mac: 0,
    linux: 0,
  })
  return (
    <div>
      <h1>Votes</h1>
      <p>Windows: {options.windows}</p>
      <p>Mac: {options.mac}</p>
      <p>Linux: {options.linux}</p>
      <div className="gap-1 flex">
        <button className="border-1 rounded-sm "
          onClick={() =>
            setOptions((prev) => ({ ...prev, windows: prev.windows + 1 }))
          }
        >
          windows
        </button>
        <button className="border-1 rounded-sm "
          onClick={() => setOptions((prev) => ({ ...prev, mac: prev.mac + 1 }))}
        >
          mac
        </button>
        <button className="border-1 rounded-sm "
          onClick={() =>
            setOptions((prev) => ({ ...prev, linux: prev.linux + 1 }))
          }
        >
          linux
        </button>
      </div>
    </div>
  )
}

export default Vote

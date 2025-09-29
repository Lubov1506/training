import { useState } from "react"
import { CustomInput } from "./CustomInput"
import { Button } from "../Button"

export const ExampleForm = () => {
  const [fieldCount, setFieldCount] = useState(2)
  return (
    <div>
      <Button onClick={() => setFieldCount((prev) => prev + 1)}>
        Add field
      </Button>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-2'>
        {Array(fieldCount)
          .fill("")
          .map((_, idx) => (
            <CustomInput key={idx} />
          ))}
      </div>
    </div>
  )
}

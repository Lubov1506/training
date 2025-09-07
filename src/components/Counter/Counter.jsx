import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState([0])
  const [step, setStep] = useState(1)

  const handleMinus = () => setCount((prev) => Number(prev - step))
  const handlePlus = () => setCount((prev) => Number(prev + step))
  const handleReset = () => {
    setCount(0)
    setStep(1)
  }
  return (
    <div className='flex bg-gray-600 w-[300px] rounded md mx-auto my-0 mt-4 '>
      <div className='flex flex-col gap-2 w-full items-center justify-center p-2 '>
        <h1 className='text-white text-3xl font-bold'>{count}</h1>
        <input
          type='text'
          className='bg-white rounded-sm'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <div className='flex gap-2'>
          <button
            className='px-2 py-1 rounded-sm border-2 bg-gray-100'
            onClick={handleMinus}
          >
            minus
          </button>
          <button
            className='px-2 py-1 rounded-sm border-2 bg-gray-100'
            onClick={handleReset}
          >
            reset
          </button>
          <button
            className='px-2 py-1 rounded-sm border-2 bg-gray-100'
            onClick={handlePlus}
            disabled={count === 3}
          >
            plus
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter

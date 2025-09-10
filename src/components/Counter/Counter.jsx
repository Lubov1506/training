import { useEffect, useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("counter")
    return savedCount !== null ? JSON.parse(savedCount) : 0
  })
  const [step, setStep] = useState(() => {
    const savedStep = window.localStorage.getItem("step")
    return savedStep !== null ? JSON.parse(savedStep) : 1
  })
  useEffect(() => {
    console.log("hello")
  }, [])
  useEffect(() => {
    window.localStorage.setItem("counter", count)
    window.localStorage.setItem("step", step)
  }, [count, step])
  useEffect(() => {
    console.log("step is changed", step)
  }, [step])
  useEffect(() => {
    console.log("count is changed", count)
  }, [count])
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
          type='number'
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
          >
            plus
          </button>
        </div>
      </div>
    </div>
  )
}


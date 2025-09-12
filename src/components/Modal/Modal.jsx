import React, { useEffect } from "react"
import { motion, scale } from "motion/react"
export const Modal = ({ children, title = "Default modal", onClose }) => {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)

    // const intervalId = setInterval(() => {
    //   console.log("interval")
    // }, 1000)
    // const timeoutId = setTimeout(() => {
    //   console.log("timeout")
    // }, 3000)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      // clearInterval(intervalId)
      // clearTimeout(timeoutId)
    }
  }, [onClose])
  return (
    <div
      className='bg-gray-900/50  w-full h-full top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center'
      onClick={handleBackDropClick}
    >
      <motion.div
        className='min-h-[400px] min-w-[300px] max-w-[400px] bg-gray-200 z-150 rounded-md shadow-2xl absolute text-black px-4 py-2 flex flex-col gap-2'
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1400,  transition: { duration: 0.5 } }}
        
      >
        <h1 className='text-center text-lg'>{title}</h1>
        <button
          onClick={onClose}
          className='absolute right-4 border-[1px] rounded-full  flex justify-center items-center w-7 h-7 cursor-pointer hover:scale-110 transition-all'
        >
          X
        </button>
        {children}
      </motion.div>
    </div>
  )
}

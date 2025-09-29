import { useId } from "react"

export const CustomInput = () => {
  const id = useId()

  return (
    <div className='w-full flex flex-col gap-1'>
      <label htmlFor={id} className='p-2'>
        Label {id}
      </label>
      <input
        type='text'
        id={id}
        placeholder='Any input here ...'
        className='py-1 px-2 w-full'
      />
    </div>
  )
}

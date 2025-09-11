import clsx from "clsx"
import s from './Input.module.css'
export const SearchBar = () => {
  return (
    <div className='flex p-2 '>
      <input 
        type='text'
        className={clsx('p-2 border-b-2 outline-none text-6xl placeholder:text-[26px] ', s.input)}
        placeholder='Search...'
      />
    </div>
  )
}

import clsx from "clsx"
import s from './Input.module.css'
export const SearchBar = ({searchValue, onChangeSearchStr}) => {
  
  return (
    <div className='flex p-2 '>
      <input 
        type='search'
        className={clsx('p-2 border-b-2 outline-none text-6xl placeholder:text-[26px] ', s.input)}
        placeholder='Search...'
        value={searchValue}
        onChange={e=>onChangeSearchStr(e.target.value)}
      />
    </div>
  )
}

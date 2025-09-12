import clsx from "clsx"

export const SearchBar = ({ searchValue, onChangeSearchStr }) => {
  return (
    <div className='flex p-2 '>
      <input
        style={{ fontSize: "26px" }}
        type='search'
        className={clsx(
          "p-2 border-b-2 outline-none text-6xl placeholder:text-[26px] "
        )}
        placeholder='Search...'
        value={searchValue}
        onChange={(e) => onChangeSearchStr(e.target.value)}
      />
    </div>
  )
}

export const SearchBar = () => {
  return (
    <div className='flex p-2 '>
      <input
        type='text'
        className='p-2 border-b-2 outline-none text-6xl placeholder:text-[26px] '
        placeholder='Search...'
      />
    </div>
  )
}

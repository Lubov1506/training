export const SearchBar = ({ setQuery, query }) => {
  return (
    <label className='flex items-center justify-center gap-2'>
      <span className='text-2xl'>Search</span>
      <input
        type='search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='shadow-xs outline-none p-1 text-sl hover:shadow-sm  focus:shadow-md transition-[all,0.3s,ease-in]'
        style={{ fontSize: "24px" }}
      />
    </label>
  )
}

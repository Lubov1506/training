export const Sort = ({ setSortType }) => {
  const typesOfSort = ["newest", "oldest", "a-z", "z-a"]

  return (
    <div>
      <select
        onChange={(e) => setSortType(e.target.value)}
        className='p-2 border rounded-sm text-5xl'
        style={{ fontSize: "24px" }}
      >
        <option value=''>Default sorting</option>
        {typesOfSort.map((type) => (
          <option value={type} key={type} className='text-xl'>
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}

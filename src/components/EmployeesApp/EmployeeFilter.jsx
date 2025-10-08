const skillsList = ["all", "react", "angular", "vue"]

export const EmployeesFilter = ({
  setSearchValue,
  isAvailable,
  setIsAvailable,
  activeSkill,
  setActiveSkill,
}) => {
  return (
    <div className='bg-gray-600 flex gap-2 p-2 px-4 justify-between items-center'>
      <h1>Filters</h1>
      <div className=''>
        <input
          className='p-1 outline-none shadow-2xl'
          placeholder='Enter search...'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <label className=''>
          <input
            type='checkbox'
            checked={isAvailable}
            onChange={() => setIsAvailable(!isAvailable)}
          />
          <span>Who wants to work</span>
        </label>
      </div>
      <div className='flex gap-2 '>
        {skillsList.map((radioButtonName) => (
          <label key={radioButtonName} className='flex gap-1'>
            <input
              checked={radioButtonName === activeSkill}
              onChange={(e) => setActiveSkill(e.target.value)}
              name='radioButtonName'
              type='radio'
              value={radioButtonName}
            />
            <span>{radioButtonName}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

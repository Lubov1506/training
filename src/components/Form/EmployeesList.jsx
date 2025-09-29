import { EmployeeCard } from "./EmployeeCard"

export const EmployeesList = ({ users = [], onDelete, searchValue }) => {
  if (!users.length) {
    return <p>No users</p>
  }
  console.log(users)

  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 py-2'>
      {users.map((user) => {
        return (
          <EmployeeCard
            {...user}
            key={user.id}
            onDelete={onDelete}
            searchValue={searchValue}
          />
        )
      })}
    </ul>
  )
}

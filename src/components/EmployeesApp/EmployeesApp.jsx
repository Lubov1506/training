import { EmployeesFilter } from "./EmployeeFilter"
import { EmployeesList } from "./EmployeesList"

import usersList from "../../assets/users.json"
import { useEffect, useState } from "react"
import { getFilteredData } from "../../helpers"

export const EmployeesApp = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem("saved-users")
    if (savedUsers !== null && JSON.parse(savedUsers).length) {
      return JSON.parse(savedUsers)
    }
    return usersList
  })
  const [searchValue, setSearchValue] = useState("")
  const [isAvailable, setIsAvailable] = useState(false)
  const [activeSkill, setActiveSkill] = useState("all")

  useEffect(() => {
    window.localStorage.setItem("saved-users", JSON.stringify(users))
  }, [users])

  const handleDeleteUser = (id) => {
    return setUsers((prev) => prev.filter((user) => user.id !== id))
  }

  return (
    <div className='w-full min-h-screen'>
      <div className='sticky top-0 '>
        <EmployeesFilter
          setSearchValue={setSearchValue}
          setIsAvailable={setIsAvailable}
          isAvailable={isAvailable}
          activeSkill={activeSkill}
          setActiveSkill={setActiveSkill}
        />
      </div>
      <EmployeesList
        users={getFilteredData(users, searchValue, isAvailable, activeSkill)}
        onDelete={handleDeleteUser}
        searchValue={searchValue}
      />
    </div>
  )
}

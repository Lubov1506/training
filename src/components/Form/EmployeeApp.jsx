import { EmployeesFilter } from "./EmployeeFilter"
import { EmployeesList } from "./EmployeesList"

import usersList from "../../assets/users.json"
import { useEffect, useState } from "react"

export const EmployeeApp = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem("saved-users")
    if (savedUsers !== null && JSON.parse(savedUsers).length) {
      return JSON.parse(savedUsers)
    }
    return usersList
  })

  useEffect(() => {
    window.localStorage.setItem("saved-users", JSON.stringify(users))
  }, [users])

  const handleDeleteUser = (id) => {
    return setUsers((prev) => prev.filter((user) => user.id !== id))
  }
  return (
    <>
      <EmployeesFilter />
      <EmployeesList users={users} onDelete={handleDeleteUser} />
    </>
  )
}

import { useEffect } from "react"
import { useUsers } from "../store/hooks"
import { fetchUsers } from "../services/usersPosts/api"
import { UserItem } from "../components/Nested/UserItem"
import { Loader } from "../components/Loader"

export const Users = () => {
  const { users, setUsers } = useUsers()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers()
        console.log(users)

        setUsers(users)
      } catch (e) {
        console.log(e)
      }
    }
    getUsers()
  }, [setUsers])
  return (
    <ul className='grid grid-cols-2 gap-4'>
      {users?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </ul>
  )
}

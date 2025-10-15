import { useEffect } from "react"
import { useUsers } from "../../store/hooks"
import { fetchUsers } from "../../services/usersPosts/api"
import { Loader } from "../../components/Loader"
import { UserItem } from "../../components/Nested"

const Users = () => {
  const { users, setUsers, query, setSearchParams } = useUsers()

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers()
        setUsers(users)
      } catch (e) {
        console.log(e)
      }
    }
    getUsers()
  }, [setUsers])
  if (!users) return <Loader />
  return (
    <>
      <input
        type='text'
        placeholder='Type here'
        className='input input-ghost focus:bg-gray-400'
        value={query}
        onChange={(e) =>
          setSearchParams(e.target.value ? { query: e.target.value } : {})
        }
      />
      {query && !users.length && (
        <p className='mt-2 font-semibold bg-gray-500 flex w-fit p-3 py-2 text-white rounded-md'>
          Not found any users
        </p>
      )}
      <ul className='grid grid-cols-2 gap-4'>
        {users?.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
    </>
  )
}
export default Users

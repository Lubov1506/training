import { useParams } from "react-router-dom"
import { fetchOneUser } from "../services/usersPosts/api"
import { useEffect, useState } from "react"

export const UserPage = () => {
  const { userId } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUsers = async () => {
      try {
        const user = await fetchOneUser(userId)
        setUser(user)
      } catch (e) {
        console.log(e)
      }
    }
    getUsers()
  }, [userId])
  return <div>{user.firstName} {user.lastName}</div>
}

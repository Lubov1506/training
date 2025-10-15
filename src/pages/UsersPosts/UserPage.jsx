import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchOneUser } from "../../services/usersPosts/api"
import { useEffect, useRef, useState } from "react"
import { Loader } from "../../components/Loader"

const UserPage = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const location = useLocation()
  const goBackRef = useRef(location.state || "/users")
  console.log(goBackRef.current)

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

  if (!user) return <Loader />
  return (
    <div>
      <Link className='btn' to={goBackRef.current}>
        Go back
      </Link>
      <div className='pt-4 grid grid-cols-3 gap-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl'>Details</h1>
          <p className='text-xl font-bold'>
            {user.firstName} {user.lastName}
          </p>
          <div className='flex justify-center items-center'>
            <img
              src={user.image}
              alt={user.alt}
              width={200}
              className='items-center'
            />
          </div>
          <div className='flex flex-col gap-2 '>
            <div className='flex justify-between gap-2 '>
              <span className='font-bold'>Age: </span>
              <span className=''>{user.age}</span>
            </div>
            <div className='flex justify-between gap-2 flex-wrap '>
              <span className='font-bold'>Address: </span>
              <span className=''>
                {user.address.address}, {user.address.city},{" "}
                {user.address.country}{" "}
              </span>
            </div>
            <div className='flex justify-between gap-2 '>
              <span className='font-bold'>Phone: </span>
              <span className=''>{user.phone}</span>
            </div>
            <div className='flex justify-between gap-2 '>
              <span className='font-bold'>Email: </span>
              <a href={`mailto:${user.email}`} className='underline'>
                {user.email}
              </a>
            </div>
          </div>
          <div className='flex gap-2'>
            <Link to='info' className='btn'>
              User info
            </Link>
            <Link to='posts' className='btn'>
              Show posts
            </Link>
          </div>
        </div>
        <div className='col-span-2 max-w-[500px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default UserPage

import { Link, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../store/hooks"
import { useState } from "react"

export const Layout = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='w-full min-h-screen flex '>
      <nav className=' text-black text-xl flex flex-col gap-2 p-2 pr-10  w-[200px] shrink-0'>
        <NavLink to='/' className='px-2 '>
          Home
        </NavLink>
        <NavLink to='/about' className='px-2 '>
          About
        </NavLink>
        <NavLink to='/users' className='px-2 '>
          Users
        </NavLink>
        <button className="btn" onClick={logout}>Logout</button>
      </nav>

      { }
      <div className='p-4 '>
        <Outlet />
      </div>
    </div>
  )
}

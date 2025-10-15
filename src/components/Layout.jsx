import { Link, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../store/hooks"
import { useState } from "react"
import { Modal } from "./Modal/Modal"

export const Layout = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
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
        <button className='btn' onClick={() => setIsOpen(true)}>
          Logout
        </button>
      </nav>

      {isOpen && (
        <Modal onClose={handleClose}>
          <div className='flex flex-col gap-2 '>
            <p>Do you realy want to logout?</p>
            <div className='flex gap-2'>
              <button
                className='btn hover:scale-105 hover:text-teal-200 focus:scale-110 transition-all duration-20 ease-in'
                onClick={handleClose}
              >
                No
              </button>
              <button
                className='btn hover:scale-105 hover:text-teal-200 focus:scale-110 transition-all duration-20 ease-in'
                onClick={logout}
              >
                Sure
              </button>
            </div>
          </div>
        </Modal>
      )}
      <div className='p-2 '>
        <Outlet />
      </div>
    </div>
  )
}

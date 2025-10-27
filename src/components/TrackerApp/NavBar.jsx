import { useDispatch, useSelector } from "react-redux"
import { logout, selectCurrentUser } from "../../redux/tracker/authSlice"
import { NavLink } from "react-router-dom"
import { selectBalance } from "../../redux/tracker/transactionsSlice"
import { addActiveClass } from "../../helpers/addActiveClass"
import clsx from "clsx"

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const balance = useSelector(selectBalance)
  const dispatch = useDispatch()
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <h2 className='btn bg-accent cursor-none text-gray-600 text-xl font-semibold'>
            {currentUser.name} | {balance}
          </h2>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <nav className='menu menu-horizontal px-1'>
          <NavLink
            className={({ isActive }) =>
              clsx("p-3", addActiveClass(isActive, "nav-link transition-all ease-in duration-100"))
            }
            to='/'
          >
            DashBoard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("p-3", addActiveClass(isActive, "nav-link transition-all ease-in duration-100"))
            }
            to='/statistics'
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx("p-3", addActiveClass(isActive, "nav-link transition-all ease-in duration-100"))
            }
            to='/add-transaction'
          >
            Add transaction
          </NavLink>
        </nav>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-accent' onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavBar

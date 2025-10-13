import { NavLink, Outlet } from "react-router-dom"
import { addActiveClass } from "../helpers"

export const About = () => {
  return (
    <div>
      <p>About</p>
      <nav className='flex gap-2 cursor-pointer bg-gray-700 w-fit text-white p-2 px-4 rounded-2xl'>
        <NavLink
          className={({ isActive }) => addActiveClass(isActive, "aboutActive")}
          to='team'
        >
          Team
        </NavLink>
        <NavLink
          className={({ isActive }) => addActiveClass(isActive, "aboutActive")}
          to='company'
        >
          Company
        </NavLink>
        <NavLink
          className={({ isActive }) => addActiveClass(isActive, "aboutActive")}
          to='mission'
        >
          Our mission
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

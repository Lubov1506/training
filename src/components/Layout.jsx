import { Link, NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className='w-full min-h-screen flex '>
      <nav className=' text-black text-xl flex flex-col gap-2 p-2 w-[200px]'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </nav>
      <div className='p-4 '>
        <Outlet />
      </div>
    </div>
  )
}

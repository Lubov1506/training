import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div>
      <nav className='text-black'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Outlet />
    </div>
  )
}

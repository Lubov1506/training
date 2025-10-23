import { useDispatch } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { logout } from "../redux/tracker/authSlice"

const Layout = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col min-h-screen'>
      <header className="flex justify-between p-1 pt-2 items-center">
        <section className="flex flex-col gap-2 items-baseline">
          <h1 className="uppercase font-semibold text-xl">Budget tracker</h1>
          <p>Balance: 10000</p>
        </section>
        <nav className="flex gap-3 justify-center items-center">
          <NavLink to='/' className='p-3'>DashBoard</NavLink>
          <NavLink to='/statistics' className=' p-3'>Statistics</NavLink>
          <NavLink to='/add-transaction' className='p-3 '>Add transaction</NavLink>
        </nav>
        <button className="btn btn-accent" onClick={()=>dispatch(logout())}>Logout</button>
      </header>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <footer className='footer sm:footer-horizontal bg-neutral text-neutral-content p-10'>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Layout

import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <section>
          <h1>Budget racker</h1>
          <p>Balance: 10000</p>
        </section>
        <nav>
          <NavLink to='/'>DashBoard</NavLink>
          <NavLink to='/statistics'>Statistics</NavLink>
          <NavLink to='/add-transaction'>Add transaction</NavLink>
        </nav>
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

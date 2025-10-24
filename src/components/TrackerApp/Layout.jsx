import {  Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='flex-grow overflow-scroll'>
        <Outlet />
      </main>
      <div className='bg-neutral'>
        <footer className='footer sm:footer-horizontal  text-neutral-content p-4 mx-auto w-2/3'>
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
    </div>
  )
}

export default Layout

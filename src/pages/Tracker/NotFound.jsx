import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold'>404</h1>
          <p className='py-6 text-xl'>
           Sorry, we could't find this page.
          </p>
          <Link to='/' className="btn btn-accent text-2xl font-semibold">Go home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

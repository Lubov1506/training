import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className='size-full flex flex-col gap-2 justify-center items-center'>
      <h1>Not found page</h1>
      <Link to='/'>back to Home</Link>
    </div>
  )
}

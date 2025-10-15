import { useNavigate } from "react-router-dom"

const Company = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Our company</p>
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
      <nav className='flex gap-2'>
        <button className='btn' onClick={() => navigate("/")}>
          Home
        </button>
        <button className='btn' onClick={() => navigate("/about")}>
          About
        </button>
        <button className='btn' onClick={() => navigate("/users")}>
          Users
        </button>
      </nav>
    </div>
  )
}
export default Company

import { Link, useLocation } from "react-router-dom"
import { highlightText } from "../../helpers"
import { useUsers } from "../../store/hooks"

export const UserItem = ({ id, firstName, lastName, company, email }) => {
  const location = useLocation()

  const { query } = useUsers()
  return (
    <li className='flex flex-col gap-2 rounded-md shadow-sm p-2'>
      <Link to={id.toString()} state={location}>
        <h2 className='text-xl font-bold'>
          {highlightText(firstName, query)} {highlightText(lastName, query)}
        </h2>
        <p>
          <span className='font-bold'>Company:</span> {company.name},
          {company.address.address}, {company.address.city}
        </p>
        <p className='underline'>{email}</p>
      </Link>
    </li>
  )
}

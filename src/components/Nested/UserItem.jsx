import { Link } from "react-router-dom"

export const UserItem = ({ id, firstName, lastName, company, email }) => {
  return (
    <li className='flex flex-col gap-2 rounded-md shadow-sm p-2'>
      <Link to={id.toString()}>
        <h2 className='text-xl font-bold'>
          {firstName} {lastName}
        </h2>
        <p>
          <span className='font-bold'>Company:</span> {company.name},
          {company.address.address}, {company.address.city}
        </p>
        <p className='underline'>
          {email}
        </p>
      </Link>
    </li>
  )
}

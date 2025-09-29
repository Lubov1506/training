import { Button } from "../Button"

export const EmployeeCard = ({ id, name, email, skills, bio, onDelete }) => {
  return (
    <li className='border-2 rounded-md p-2 flex flex-col gap-1'>
      <h3 className='font-bold text-2xl '>{name}</h3>
      <p className='underline'>{email}</p>
      <p className='text-[12px]'>{bio}</p>
      <ul className='flex flex-wrap gap-2 '>
        {skills.map((skill) => (
          <li key={skill} className='bg-gray-100 rounded-md px-2 py-1'>
            {skill}
          </li>
        ))}
      </ul>
      <Button cn='w-fit' onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  )
}

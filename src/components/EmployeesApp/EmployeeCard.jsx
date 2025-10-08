import clsx from "clsx"
import { highlightText } from "../../helpers"
import { Button } from "../Button"

export const EmployeeCard = ({
  id,
  name,
  email,
  skills,
  bio,
  onDelete,
  searchValue,
  isOpenToWork,
}) => {
  return (
    <li
      className={clsx(
        "border-2 rounded-md p-2 flex flex-col gap-1 bg-gray-600 ",
        isOpenToWork && "bg-teal-600"
      )}
    >
      <h3 className='font-bold text-2xl '>
        {highlightText(name, searchValue)}
      </h3>
      <p className='underline'>{highlightText(email, searchValue)}</p>
      <p className='text-[12px]'>{highlightText(bio, searchValue)}</p>
      <ul className='flex flex-wrap gap-2 '>
        {skills.map((skill) => (
          <li key={skill} className='bg-gray-800 rounded-md px-2 py-1'>
            {highlightText(skill, searchValue)}
          </li>
        ))}
      </ul>
      <Button cn='w-fit' onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  )
}

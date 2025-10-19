import { useSelector } from "react-redux"
import { selectTodosFilter } from "../../redux/todosFilter/selectors"

export const Filter = () => {
  const filter = useSelector(selectTodosFilter)
  console.log(filter);
  
  return (
    <div className='flex gap-2 justify-center items-center'>
      <button className='btn'>All</button>
      <button className='btn'>Active</button>
      <button className='btn'>Completed</button>
      <button className='btn'>Liked</button>
    </div>
  )
}

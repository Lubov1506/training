import { useDispatch } from "react-redux"
import {
  deleteTodo,
  toggleLiked,
  toggleTodo,
} from "../../redux/todoList/actions"
import { FcLike } from "react-icons/fc"
import { FaRegHeart } from "react-icons/fa"
export const TodoItem = ({ id, todo, completed, liked }) => {
  // const { deleteTodo } = useTodos()
  const dispatch = useDispatch()
  const handleDelete = (id) => dispatch(deleteTodo(id))
  console.log(completed)

  return (
    <div className='card bg-base-100 shadow-sm relative'>
      <div className='card-body'>
        <div className='absolute top-2 right-2 flex gap-2 justify-start items-center'>
          <input
            type='checkbox'
            checked={completed}
            size={20}
            className='checkbox checkbox-accent'
            onChange={() => dispatch(toggleTodo(id))}
          />
          {liked ? (
            <FcLike
              onClick={() => dispatch(toggleLiked(id))}
              size={22}
            />
          ) : (
            <FaRegHeart onClick={() => dispatch(toggleLiked(id))} size={22}/>
          )}
        </div>

        {/* <h2 className='card-title'>Card title!</h2> */}
        <p>{todo}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

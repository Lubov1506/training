import { useDispatch } from "react-redux"
import {
  deleteTodo,
  toggleLiked,
  toggleTodo,
} from "../../redux/todoList/actions"
import { FcLike } from "react-icons/fc"
import { FaRegHeart } from "react-icons/fa"
export const TodoItem = ({ todo, openElement }) => {
  // const { deleteTodo } = useTodos()
  const dispatch = useDispatch()
  const handleDelete = (id) => dispatch(deleteTodo(id))

  return (
    <div className='card bg-base-100 shadow-sm relative'>
      <div className='card-body'>
        <div className='absolute top-2 right-2 flex gap-2 justify-start items-center'>
          {todo.liked ? (
            <FcLike onClick={() => dispatch(toggleLiked(todo.id))} size={22} />
          ) : (
            <FaRegHeart
              onClick={() => dispatch(toggleLiked(todo.id))}
              size={22}
            />
          )}
        </div>

        {/* <h2 className='card-title'>Card title!</h2> */}
        <p>{todo.todo}</p>
        <div className='card-actions flex flex-col gap-2 justify-end w-full'>
          <label className='label cursor-pointer flex justify-between w-full'>
            <span className='label-text '>Set as completed</span>
            <input
              type='checkbox'
              checked={todo.completed}
              size={20}
              className='checkbox checkbox-accent'
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
          </label>
          <div className='flex gap-2 justify-end w-full'>
            <button
              className='btn btn-secondary'
              onClick={() => openElement(todo)}
            >
              Edit
            </button>
            <button
              className='btn btn-primary'
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

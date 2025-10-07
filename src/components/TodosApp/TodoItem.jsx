import { useTodos } from "../../store/hooks"

export const TodoItem = ({ id, todo }) => {
  const { deleteTodo } = useTodos()

  return (
    <div className='card bg-base-100 shadow-sm'>
      <div className='card-body'>
        {/* <h2 className='card-title'>Card title!</h2> */}
        <p>{todo}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary' onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

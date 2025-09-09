const TodoItem = ({ id, completed, todo, onDelete, onToggle, onRename }) => {
  return (
    <li className='flex justify-between gap-2 border-1 rounded-sm p-1  ' key={id}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span className='flex-1' onClick={()=>onRename(id)}> {todo}</span>
      <button className='border-1 rounded-xs px-1' onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

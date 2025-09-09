
import TodoItem from "./TodoItem"
const TodoList = ({ todos, handleDelete, handleRename, handleToggle }) => {
  return (
    <ul className='flex flex-col gap-2'>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onRename={handleRename}
        />
      ))}
    </ul>
  )
}

export default TodoList

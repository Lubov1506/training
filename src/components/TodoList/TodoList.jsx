import { useState } from "react"
import todosData from "../../assets/todos.json"
import TodoItem from "../TodoItem/TodoItem"
import { nanoid } from "nanoid"
const TodoList = () => {
  const [todos, setTodos] = useState(todosData)
  const [newTodo, setNewTodo] = useState("")

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, { id: nanoid(), newTodo, completed: false }])
    setNewTodo("")
  }
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }
  const handleRemoveSelected = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }
  const handleRemoveAll = () => {
    setTodos([])
  }
  const handleRename = (id) => {
    const newValue = prompt("Enter new value")
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, todo: newValue } : item))
    )
  }
  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex gap-1'>
        <input
          type='text'
          className='shadow-2xl border-1'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
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
      <button onClick={handleRemoveSelected}>Remove completed</button>
      <button onClick={handleRemoveAll}>Remove all</button>
    </div>
  )
}

export default TodoList

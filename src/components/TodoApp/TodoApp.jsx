import { useEffect, useState } from "react"
import todosData from "../../assets/todos.json"
import { nanoid } from "nanoid"
import Modal from "../Modal/Modal"
import TodoList from "./TodoList"

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem("todos")
    if (savedTodos !== null) {
      return JSON.parse(savedTodos)
    }
    return todosData
  })
  const [newTodo, setNewTodo] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const handleAddTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: nanoid(), todo: newTodo, completed: false },
    ])
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
    <>
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
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleRename={handleRename}
          handleToggle={handleToggle}
        />
        <button onClick={handleRemoveSelected}>Remove completed</button>
        <button onClick={handleRemoveAll}>Remove all</button>
        <button onClick={handleOpen}>Open modal</button>
      </div>
      {isOpen && (
        <Modal onClose={onClose}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ea.
            Illo, nam! Explicabo omnis, quisquam qui harum doloremque id est
            eius nostrum aut reprehenderit culpa neque itaque vitae eveniet
            atque.
          </p>
        </Modal>
      )}
    </>
  )
}

export default TodoApp

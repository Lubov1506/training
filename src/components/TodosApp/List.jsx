import { useSelector } from "react-redux"
import { useTodos } from "../../store/hooks"
import { TodoItem } from "./TodoItem"
import { selectTodos } from "../../redux/todoList/selectors"

export const List = () => {
  const  todos  = useSelector(selectTodos)
  return (
    <>
     
      <ul className='grid grid-cols-2 gap-2 p-3'>
        {todos?.map((todo, idx) => (
          <TodoItem key={idx} {...todo} />
        ))}
      </ul>
    </>
  )
}

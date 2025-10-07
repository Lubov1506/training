import { useTodos } from "../../store/hooks"
import { TodoItem } from "./TodoItem"

export const List = () => {
  const { todos } = useTodos()
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

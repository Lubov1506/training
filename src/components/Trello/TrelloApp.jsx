import { useSelector } from "react-redux"
import List from "./List"
import { selectBoards, selectTasks } from "../../redux/trello/slice"
import { AddTask } from "./AddTask"

const TrelloApp = () => {
  const tasks = useSelector(selectTasks)
  const boards = useSelector(selectBoards)

  return (
    <div className='text-gray-800 w-full'>
      <AddTask />
      <div className='grid grid-cols-3 gap-3 px-10 mx-auto'>
        {boards?.map((board) => (
          <List
            key={board.id}
            title={board.title}
            items={tasks.filter((item) => item.boardId === board.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TrelloApp

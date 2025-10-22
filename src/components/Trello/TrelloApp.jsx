import { useSelector } from "react-redux"
import List from "./List"
import { selectBoards } from "../../redux/trello/slice"

const TrelloApp = () => {
  const data = [
    { id: 123, title: "Set up project repo", completed: false, boardId: 2 },
    { id: 124, title: "Create landing page mock", completed: true, boardId: 2 },
    { id: 125, title: "Write auth API", completed: false, boardId: 1 },
    { id: 126, title: "Design user profile", completed: false, boardId: 3 },
    {
      id: 127,
      title: "Fix header responsiveness",
      completed: true,
      boardId: 2,
    },
    { id: 128, title: "Add unit tests", completed: false, boardId: 1 },
    { id: 129, title: "Prepare demo data", completed: true, boardId: 2 },
    {
      id: 130,
      title: "Create components library",
      completed: false,
      boardId: 3,
    },
    { id: 131, title: "Review pull requests", completed: false, boardId: 2 },
    { id: 132, title: "Write README", completed: true, boardId: 1 },
    { id: 133, title: "Set up CI/CD", completed: false, boardId: 4 },
    { id: 134, title: "Optimize images", completed: true, boardId: 3 },
    { id: 135, title: "Implement search", completed: false, boardId: 2 },
    { id: 136, title: "Refactor styles", completed: false, boardId: 3 },
    { id: 137, title: "User acceptance testing", completed: true, boardId: 1 },
  ]
  const boards = useSelector(selectBoards)

  return (
    <div className="text-gray-800 w-full">
      <div className='grid grid-cols-3 gap-3 px-10 mx-auto'>
        {boards?.map((board) => (
          <List
            key={board.id}
            title={board.title}
            items={data.filter((item) => item.boardId === board.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default TrelloApp

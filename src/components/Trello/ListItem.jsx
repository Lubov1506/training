import { useDispatch, useSelector } from "react-redux"
import { moveTask, selectBoards } from "../../redux/trello/slice"

const ListItem = ({ item }) => {
  const dispatch = useDispatch()
  const boards = useSelector(selectBoards)
  return (
    <li className='shadow-md p-2 px-3 '>
      <p>{item.title}</p>
      <select
        onChange={(e) =>
          dispatch(moveTask({ id: item.id, targetBoard: +e.target.value }))
        }
        defaultValue='Select board'
        className='select select-primary  bg-gray-200'
      >
        <option disabled={true}>Select board</option>
        {boards
          .filter((board) => board.id !== item.boardId)
          .map((board) => (
            <option key={board.id} value={board.id}>
              {board.title}
            </option>
          ))}
      </select>
    </li>
  )
}

export default ListItem

import { useDispatch, useSelector } from "react-redux"
import { selectTodosFilter } from "../../redux/todosFilter/selectors"
import clsx from "clsx"
import { changeFilter } from "../../redux/todosFilter/actions"

export const Filter = () => {
  const filter = useSelector(selectTodosFilter)
  console.log(filter)
  const dispatch = useDispatch()
  return (
    <div className='flex gap-2 justify-center items-center'>
      <button
        onClick={() => dispatch(changeFilter("all"))}
        className={clsx(
          "btn",
          filter === "all" ? "btn-success" : "btn:primary"
        )}
      >
        All
      </button>
      <button
        onClick={() => dispatch(changeFilter("active"))}
        className={clsx(
          "btn",
          filter === "active" ? "btn-success" : "btn:primary"
        )}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(changeFilter("completed"))}
        className={clsx(
          "btn",
          filter === "completed" ? "btn-success" : "btn:primary"
        )}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(changeFilter("liked"))}
        className={clsx(
          "btn",
          filter === "liked" ? "btn-success" : "btn:primary"
        )}
      >
        Liked
      </button>
    </div>
  )
}

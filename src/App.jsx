import { lazy } from "react"
import { Counter } from "./components/Counter/Counter"
import { TodosApp } from "./components/TodosApp/TodosApp"

const TrelloApp = lazy(() => import("./components/Trello/TrelloApp"))
function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  items-center bg-gray-200'>
      {/* <TodosApp /> */}
      <TrelloApp/>
    </div>
  )
}

export default App

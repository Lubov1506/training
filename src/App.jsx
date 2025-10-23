import { lazy } from "react"

const TrelloApp = lazy(() => import("./components/Trello/TrelloApp"))
function App() {
  return (
    <div className='flex flex-col gap-2 w-full min-h-screen  items-center bg-gray-200'>

      <TrelloApp/>
    </div>
  )
}

export default App

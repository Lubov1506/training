import { TodosApp } from "./components/"
import { useUser } from "./store/hooks"

function App() {
  const { user } = useUser()
  return (
    <div className='flex flex-col gap-2   py-2 w-full'>
      <TodosApp />
      <p>{user.name}</p>
    </div>
  )
}

export default App

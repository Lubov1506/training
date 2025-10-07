import { useUser } from "../../store/hooks"
import { AddTodo } from "./AddTodo"
import { AuthForm } from "./AuthForm"
import { Filter } from "./Filter"
import { Header } from "./Header"
import { List } from "./List"

export const TodosApp = () => {
  const { isLoggedIn } = useUser()
  if (!isLoggedIn) {
    return (
      <div className='w-full h-screen grid place-content-center'>
        <AuthForm />
      </div>
    )
  }
  return (
    <div className=' bg-gray-200 min-h-screen min-w-full'>
      <Header />
      <AddTodo />
      <Filter />
      <List />
    </div>
  )
}

import { useContext } from "react"
import { UserContext } from "./UserProvider"
import { TodosContext } from "./TodosProvider"

export const useUser = () => useContext(UserContext)
export const useTodos = () => useContext(TodosContext)

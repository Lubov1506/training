import { nanoid } from "nanoid"
import { ADD_TODO, DELETE_TODO, TOGGLE_LIKED, TOGGLE_TODO } from "./constants"

export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id })
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo, id: nanoid(), completed: false, liked: false },
})
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id })
export const toggleLiked = (id) => ({ type: TOGGLE_LIKED, payload: id })

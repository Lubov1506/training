import { createAction, nanoid } from "@reduxjs/toolkit"

export const addTodo = createAction("addTodo", (todo) => {
  return {
    payload: { todo, id: nanoid(), completed: false, liked: false },
  }
})
export const deleteTodo = createAction("deleteTodo")
export const toggleTodo = createAction("toggleTodo")
export const toggleLiked = createAction("toggleLiked")
export const editTodo = createAction("editTodo")

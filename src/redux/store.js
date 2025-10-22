import { counterReducer } from "./counter/slice"
import { todoReducer } from "./todoList/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    todosFilter: todosFilterReducer,
  },
  devTools: import.meta.env.MODE !== "production",
})

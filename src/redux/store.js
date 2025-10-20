import { counterReducer } from "./counter/slice"
import { todoReducer } from "./todoList/slice"
import { todosFilterReducer } from "./todosFilter/reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    todosFilter: todosFilterReducer,
  },
  devTools: import.meta.env.MODE !== "production",
})

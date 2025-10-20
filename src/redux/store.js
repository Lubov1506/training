import { counterReducer } from "./counter/reducer"
import { todoReducer } from "./todoList/reducer"
import { todosFilterReducer } from "./todosFilter/reducer"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoReducer,
    todosFilter: todosFilterReducer,
  },
  devTools: import.meta.env.MODE !=='production'
})

import { combineReducers, createStore } from "redux"
import { counterReducer } from "./counter/reducer"
import { devToolsEnhancer } from "@redux-devtools/extension"
import { todoReducer } from "./todoList/reducer"
import { todosFilterReducer } from "./todosFilter/reducer"
const enhancer = devToolsEnhancer()
const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoReducer,
  todosFilter: todosFilterReducer,
})
export const store = createStore(rootReducer, enhancer)

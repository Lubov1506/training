import { combineReducers, createStore } from "redux"
import { counterReducer } from "./counter/reducer"
import { devToolsEnhancer } from "@redux-devtools/extension"
import { todoReducer } from "./todoList/reducer"
const enhancer = devToolsEnhancer()
const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoReducer
})
export const store = createStore(rootReducer, enhancer)

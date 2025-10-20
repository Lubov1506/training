import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [
    { id: 1, todo: "make something 1", completed: false, liked: true },
    { id: 2, todo: "make something 2", completed: true, liked: false },
    { id: 3, todo: "make something 3", completed: false, liked: false },
    { id: 4, todo: "make something 4", completed: true, liked: true },
  ],
}
export const slice = createSlice({
  name: "todos",
  initialState,
  selectors: {
    selectTodos: (state) => state.todos,
  },
  reducers: {
    addTodo: {
      prepare: (todo) => {
        return {
          payload: {
            todo,
            id: nanoid(),
            completed: false,
            liked: false,
          },
        }
      },
      reducer: (state, { payload }) => {
        state.todos.push(payload)
      },
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
    toggleTodo: (state, { payload }) => {
      const item = state.todos.find((item) => item.id === payload)
      if (item) {
        item.completed = !item.completed
      }
    },
    toggleLiked: (state, { payload }) => {
      const item = state.todos.find((todo) => todo.id === payload)
      if (item) {
        item.liked = !item.liked
      }
    },
    editTodo: (state, { payload }) => {
      const itemIndex = state.todos.findIndex((todo) => todo.id === payload.id)
      if (itemIndex !== -1) {
        state.todos[itemIndex] = payload
      }
    },
  },
})
export const todoReducer = slice.reducer
export const { addTodo, deleteTodo, toggleLiked, toggleTodo, editTodo } =  slice.actions
export const { selectTodos } = slice.selectors

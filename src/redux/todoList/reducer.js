import { createReducer } from "@reduxjs/toolkit"
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleLiked,
  toggleTodo,
} from "./actions"

const initialState = {
  todos: [
    { id: 1, todo: "make something 1", completed: false, liked: true },
    { id: 2, todo: "make something 2", completed: true, liked: false },
    { id: 3, todo: "make something 3", completed: false, liked: false },
    { id: 4, todo: "make something 4", completed: true, liked: true },
  ],
}

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push(action.payload)
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    })
    .addCase(toggleTodo, (state, action) => {
      const item = state.todos.find((item) => item.id === action.payload)
      item.completed = !item.completed
    })
    .addCase(toggleLiked, (state, action) => {
      const item = state.todos.find((todo) => todo.id === action.payload)
      item.liked = !item.liked
    })
    .addCase(editTodo, (state, action) => {
      const itemIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      )
      state.todos[itemIndex] = action.payload
    })
})

// export const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case deleteTodo.type: {
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       }
//     }
//     case addTodo.type: {
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       }
//     }
//     case toggleTodo.type: {
//       console.log(action.payload)

//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       }
//     }
//     case toggleLiked.type: {
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload ? { ...todo, liked: !todo.liked } : todo
//         ),
//       }
//     }
//     case editTodo.type: {
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload.id ? { ...action.payload } : todo
//         ),
//       }
//     }
//     default:
//       return state
//   }
// }

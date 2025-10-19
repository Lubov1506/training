import { ADD_TODO, DELETE_TODO, TOGGLE_LIKED, TOGGLE_TODO } from "./constants"

const initialState = {
  todos: [
    { id: 1, todo: "make something 1", completed: false, liked: true },
    { id: 2, todo: "make something 2", completed: true, liked: false },
    { id: 3, todo: "make something 3", completed: false, liked: false },
    { id: 4, todo: "make something 4", completed: true, liked: true },
  ],
}
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    }
    case TOGGLE_TODO: {
      console.log(action.payload)

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      }
    }
    case TOGGLE_LIKED: {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, liked: !todo.liked } : todo
        ),
      }
    }
    default:
      return state
  }
}

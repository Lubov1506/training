import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  boards: [
    { id: 1, title: "In progress" },
    { id: 2, title: "Review" },
    { id: 3, title: "Done" },
  ],
  tasks: [],
}
const slice = createSlice({
  name: "trello",
  initialState,
  selectors: {
    selectBoards: (state) => state.boards,
    selectTasks: (state) => state.tasks,
  },
  reducers: {
    addTask: (state, { payload }) => {
      console.log(payload)

      state.tasks.push(payload)
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload)
    },
    moveTask: (state, { payload }) => {
      const movedTask = state.tasks.find((item) => item.id === payload.id)
      if (movedTask) {
        movedTask.boardId = payload.targetBoard
      }
    },
  },
})
export const trelloReducer = slice.reducer
export const { selectBoards, selectTasks } = slice.selectors
export const { addTask, deleteTask, moveTask } = slice.actions

/* 
{ id: 123, title: "Set up project repo", completed: false, boardId: 2 },
    { id: 124, title: "Create landing page mock", completed: true, boardId: 2 },
    { id: 125, title: "Write auth API", completed: false, boardId: 1 },
    { id: 126, title: "Design user profile", completed: false, boardId: 3 },
    {
      id: 127,
      title: "Fix header responsiveness",
      completed: true,
      boardId: 2,
    },
    { id: 128, title: "Add unit tests", completed: false, boardId: 1 },
    { id: 129, title: "Prepare demo data", completed: true, boardId: 2 },
    {
      id: 130,
      title: "Create components library",
      completed: false,
      boardId: 3,
    },
    { id: 131, title: "Review pull requests", completed: false, boardId: 2 },
    { id: 132, title: "Write README", completed: true, boardId: 1 },
    { id: 133, title: "Set up CI/CD", completed: false, boardId: 4 },
    { id: 134, title: "Optimize images", completed: true, boardId: 3 },
    { id: 135, title: "Implement search", completed: false, boardId: 2 },
    { id: 136, title: "Refactor styles", completed: false, boardId: 3 },
    { id: 137, title: "User acceptance testing", completed: true, boardId: 1 },
  */

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  boards: [
    { id: 1, title: "In progress" },
    { id: 2, title: "Review" },
    { id: 3, title: "Done" },
  ],
  items: [],
}
const slice = createSlice({
  name: "trello",
  initialState,
  selectors: {
    selectBoards: (state) => state.boards,
    selectItems: (state) => state.items,
  },
  reducers: {},
})
export const trelloReducer = slice.reducer
export const { selectBoards, selectItems } = slice.selectors
export const {} = slice.actions

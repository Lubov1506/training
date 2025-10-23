import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  income: ["Salary", "Freelance", "Investment", "Other"],
  expense: [
    "Food",
    "House",
    "Family",
    "Car",
    "Health",
    "Entertainment",
    "Other",
  ],
}

const slice = createSlice({
  name: "categories",
  initialState,
  selectors: {
    selectIncomeCats: (state) => state.income,
    selectExpenseCats: (state) => state.expense,
  },
  reducers: {},
})
export const categoriesReducer = slice.reducer
export const { selectIncomeCats, selectExpenseCats } = slice.selectors
export const {} = slice.actions

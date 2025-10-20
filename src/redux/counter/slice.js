import { createSlice } from "@reduxjs/toolkit"

const initialState = { count: 0, step: 1 }

export const slice = createSlice({
  name: "counter",
  initialState,
  selectors: {
    selectCount: (state) => state.count,
    selectStep: (state) => state.step,
  },
  reducers: {
    increment: (state, action) => {
      state.count += state.step
    },
    decrement: (state, action) => {
      state.count -= state.step
    },
    reset: (state, action) => {
      return initialState
    },
    setStep: (state, {payload}) => {
      state.step = payload
    },
  },
})
export const counterReducer = slice.reducer
export const { increment, decrement, reset, setStep } = slice.actions
export const {selectCount, selectStep} = slice.selectors

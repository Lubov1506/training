import { createReducer } from "@reduxjs/toolkit"
import { decrement, increment, reset, setStep } from "./actions"
import { DECREMENT, INCREMENT, RESET, SET_STEP } from "./constants"

const initialState = { count: 0, step: 1 }

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.count += state.step
    })
    .addCase(decrement, (state, action) => {
      state.count -= state.step
    })
    .addCase(reset, (state, action) => {
      return initialState
    })
    .addCase(setStep, (state, action)=>{
      state.step = action.payload
    })
})
// export const counterReducer = (state = initialSate, action) => {
//   switch (action.type) {
//     case increment.type: {
//       return {
//         ...state,
//         count: state.count + state.step,
//       }
//     }
//     case decrement.type: {
//       return {
//         ...state,
//         count: state.count - state.step,
//       }
//     }
//     case reset.type: {
//       return initialSate
//     }
//     case setStep.type: {
//       return {
//         ...state,
//         step: action.payload,
//       }
//     }
//     default:
//       return state
//   }
// }

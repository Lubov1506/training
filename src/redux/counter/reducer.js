import { DECREMENT, INCREMENT, RESET, SET_STEP } from "./constants"

const initialSate = { count: 0, step: 1 }

export const counterReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + state.step,
      }
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - state.step,
      }
    }
    case RESET: {
      return initialSate
    }
    case SET_STEP: {
      return {
        ...state,
        step: action.payload,
      }
    }
    default:
      return state
  }
}

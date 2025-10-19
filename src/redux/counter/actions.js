import { DECREMENT, INCREMENT, RESET, SET_STEP } from "./constants"

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
export const setStep = (step) => ({ type: SET_STEP, payload: step })

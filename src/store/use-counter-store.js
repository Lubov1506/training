import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
const initialState = {
  count: 0,
  newCount: 3,
}

const counterStore = (set) => ({
  ...initialState,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
})
const useCounterStore = create(
  devtools(
    persist(counterStore, {
      name: "counter-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ count: state.count }),
    })
  )
)
export const useCount = () => useCounterStore((state) => state.count)
export const incrementCount = () => useCounterStore.getState().increment
export const decrementCount = () => useCounterStore.getState().decrement

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  transactions: [],
  balance: 0,
  totalIncome: 0,
  totalExpense: 0,
}

const slice = createSlice({
  name: "transactions",
  initialState,
  selectors: {
    selectTransactions: (state) => state.transactions,
    selectBalance: (state) => state.balance,
    selectIncome: (state) => state.totalIncome,
    selectExpense: (state) => state.totalExpense,
  },
  reducers: {
    addTransaction: (state, { payload }) => {
      state.transactions.push(payload)
    },
    deleteTransaction: (state, { payload }) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== payload
      )
    },
    editTransaction: (state, { payload }) => {
      const editedItem = state.transactions.find(
        (item) => item.id === payload.id
      )
      // if(editedItem){
      //     editedItem = payload.newData
      // }
    },
  },
})
export const transactionsReducer = slice.reducer
export const {
  selectTransactions,
  selectBalance,
  selectIncome,
  selectExpense,
} = slice.selectors
export const { addTransaction, deleteTransaction } = slice.actions

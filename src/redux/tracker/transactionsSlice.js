import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
  transactions: [],
  balance: 0,
  totalIncome: 0,
  totalExpense: 0,
}

const slice = createSlice({
  name: "transactions",
  initialState,
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
      state.transactions = state.transactions.map((item) =>
        item.id === payload.id ? payload : item
      )
    },
  },
})
export const transactionsReducer = slice.reducer

export const { addTransaction, deleteTransaction, editTransaction } =
  slice.actions
export const selectAllTransactions = (state) => state.transactions.transactions
export const selectCurrentUser = (state) => state.auth.currentUser

export const selectTransactions = createSelector(
  [selectAllTransactions, selectCurrentUser],
  (transactions, currentUser) => {
    if (!currentUser) return []
    return transactions.filter((item) => item.owner === currentUser.email)
  }
)

export const selectBalance = createSelector(
  [selectTransactions],
  (transactions) => transactions.reduce((acc, item) => acc + item.sum, 0)
)

export const selectIncome = createSelector(
  [selectTransactions],
  (transactions) =>
    transactions.reduce(
      (acc, item) => acc + (item.type === "Income" ? Math.abs(item.sum) : 0),
      0
    )
)

export const selectExpense = createSelector(
  [selectTransactions],
  (transactions) =>
    transactions.reduce(
      (acc, item) => acc + (item.type === "Expense" ? item.sum : 0),
      0
    )
)

/*   selectors: {
    selectTransactions: (state) => state.transactions,
    selectBalance: (state) =>
      state.transactions.reduce((acc, item) => acc + item.sum, 0),
    selectIncome: (state) =>
      state.transactions.reduce(
        (acc, item) => acc + Math.abs(item.type === "Income" ? item.sum : 0),
        0
      ),
    selectExpense: (state) =>
      state.transactions.reduce(
        (acc, item) => acc + (item.type === "Expense" ? item.sum : 0),
        0
      ),
  }, */

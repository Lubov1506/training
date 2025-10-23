import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"

import { transactionsReducer } from "./tracker/transactionsSlice"
import { categoriesReducer } from "./tracker/categoriesSlice"
import { version } from "react"
import { authReducer } from "./tracker/authSlice"

const transactionsConfig = {
  key: "transactions",
  version: 1,
  storage,
}
const categoriesConfig = {
  key: "categories",
  version: 1,
  storage,
}
const authConfig = {
  key: "auth",
  version: 1,
  storage,
}
export const store = configureStore({
  reducer: {
    transactions: persistReducer(transactionsConfig, transactionsReducer),
    categories: persistReducer(categoriesConfig, categoriesReducer),
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== "production",
})
export const persistor = persistStore(store)

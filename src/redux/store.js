import { counterReducer } from "./counter/slice"
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
import { todoReducer } from "./todoList/slice"
import { configureStore } from "@reduxjs/toolkit"
import { todosFilterReducer } from "./todosFilter/slice"
import { trelloReducer } from "./trello/slice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}
const trelloConfig = {
  key: "trello",
  version: 1,
  storage,
}
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistReducer(persistConfig, todoReducer),
    todosFilter: todosFilterReducer,
    trello: persistReducer(trelloConfig, trelloReducer),
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

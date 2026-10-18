import { configureStore } from '@reduxjs/toolkit'
import todo_reducer from "@/features/todo/todo_slice";

export const store = configureStore({
  reducer: {
    todos: todo_reducer
  }
})

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
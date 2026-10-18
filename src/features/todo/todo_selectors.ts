import type { RootState } from "@/store";

export const select_todos_count = (state: RootState) => state.todos.length
export const select_uncompleted_todos = (state: RootState) => state.todos.filter(t => !t.is_completed)
export const select_completed_todos = (state: RootState) => state.todos.filter(t => t.is_completed)
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
    id: string;
    title: string;
    description: string;
    is_completed: boolean;
}

const initial_state: ITodo[] = [{
    id: crypto.randomUUID(),
    title: "test",
    description: "Todo description",
    is_completed: false
}]

export const todo_slice = createSlice({
    name: "todos",
    initialState: initial_state,
    reducers: {
        add_todo: (state, action: PayloadAction<Omit<ITodo, "id" | "is_completed">>) => {
            const new_todo = {
                id: crypto.randomUUID(),
                ...action.payload,
                is_completed: false
            };

            state.push(new_todo)
        },
        edit_todo: (state, action: PayloadAction<Omit<ITodo, "is_completed">>) => {
            console.log(action)
            const todo = state.find(t => t.id === action.payload.id)
            if (todo) {
                todo.title = action.payload.title;
                todo.description = action.payload.description;
            }
        },
        delete_todo: (state, action: PayloadAction<string>) => {
            return state.filter(t => t.id !== action.payload);
        },
        toggle_todo_state: (state, action: PayloadAction<string>) => {
            const todo = state.find(t => t.id === action.payload)
            if (todo)
                todo.is_completed = !todo.is_completed
        },
    }
})

export const { add_todo, edit_todo, delete_todo, toggle_todo_state } = todo_slice.actions
export default todo_slice.reducer
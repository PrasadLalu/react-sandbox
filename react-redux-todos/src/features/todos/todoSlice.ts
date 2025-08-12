import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: string,
    text: string,
    completed: boolean,
}

interface TodoState {
    items: Todo[],
}

const initialState: TodoState = {
    items: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.items.push(todo);
        },
        removeTodoItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(todo => todo.id !== action.payload)
        }
    }
});

export const { addTodoItem, removeTodoItem } = todoSlice.actions;

export default todoSlice.reducer;

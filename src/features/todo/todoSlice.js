import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [
        {id: 1, text : "Hello world"},
    ]
}


export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }

    }

})

// exporting all the reducer separately 
export const {addTodo, removeTodo} = todoSlice.actions


// main source -> passing all the reducer to store
export default todoSlice.reducer;

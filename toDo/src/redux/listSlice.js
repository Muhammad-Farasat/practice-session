import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: []
}

export const listSlice = createSlice( {
    name: 'list',
    initialState,
    reducers: {
        
        addTodo: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem('todo', JSON.stringify(state.value))
        },

        allTodo: (state) => {
            const todo = JSON.parse(localStorage.getItem('todo')) || []       
            state.value = todo
        },
        
        deleteTodo: (state, action) => {
            state.value = state.value.filter((_, i)=> i !== action.payload)
            localStorage.setItem('todo', JSON.stringify(state.value))
        },

        completeTodo: (state, action) => {
            state.value = state.value.map((todo, i) =>
                i === action.payload ? { ...todo, completed: !todo.completed } : todo)
            localStorage.setItem('todo', JSON.stringify(state.value))
        }
    }
})


export const { allTodo,addTodo, deleteTodo, completeTodo} = listSlice.actions
export default listSlice.reducer 
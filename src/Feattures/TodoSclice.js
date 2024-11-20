import {createSlice, nanoid} from "@reduxjs/toolkit";

export const TodoSclice = createSlice({
    name: 'todos',
    initialState: {
        todos: [{
            id: nanoid(),
            todo: 'Learn React',
            completed: false
        }],
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                todo: action.payload,
                completed: false
            })
        },
        // remove
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // update todo
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        todo: action.payload.todo
                    }
                }
                return todo
            })
        },

        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        },
    }


})

export const { addTodo, removeTodo, updateTodo, completeTodo } = TodoSclice.actions

export default TodoSclice.reducer

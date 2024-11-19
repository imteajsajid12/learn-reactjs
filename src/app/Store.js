import  {configureStore} from '@reduxjs/toolkit';
import TodoSclice from "../Feattures/TodoSclice.js";




export const store = configureStore({
    reducer: TodoSclice
})
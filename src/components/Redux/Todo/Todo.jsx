import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import {removeTodo} from "../../../Feattures/TodoSclice.js";




function Todo(props) {


    const  Todos= useSelector(state => state.todos);
    const  dispatch = useDispatch();
    return (
        <>
    <div>
        {Todos.map((todo) => (


            <div key={todo.id}>
                {todo.todo}
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </div>
        ))}
    </div>


        </>
    );
}

export default Todo;
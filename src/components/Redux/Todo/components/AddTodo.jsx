import React from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../../../../Feattures/TodoSclice.js";
import Todo from "../../../Redux/Todo/Todo.jsx";


function AddTodo(props) {
const  [input , setInput] = React.useState("");
 const dispatch = useDispatch(addTodo( input ));
 const handleSubmit = (e) => {
     e.preventDefault();
     dispatch( addTodo( input ));
      setInput('')
 }
    return (
        <>
            <form className="flex">
                <input
                    value={input}
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                />
                <button onClick={handleSubmit} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>

            <Todo></Todo>

        </>
    );
}

export default AddTodo;
import React from "react";
import {UseTodo} from "../../Context/index.js";

function TodoForm() {
const  [todo  , setTodo] = React.useState("");

const  {addTodo } = UseTodo();

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(  todo );
        todo && setTodo("");
    }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            onClick={handleSubmit}>
                Add
            </button>
        </form>
    );
}

export default TodoForm;


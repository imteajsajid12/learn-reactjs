import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoTable from "./components/TodoTable.jsx";


function Todo(props) {


    const Todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos using Redux</h1>
                    <div className="mb-4">
                        {/*<TodoFoem></TodoFoem>*/}
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here*/}

                        {Todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoTable todo={todo} key={todo.id}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/*<div>*/}
            {/*    {Todos.map((todo) => (*/}


            {/*        <div key={todo.id}>*/}
            {/*            {todo.todo}*/}
            {/*            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}


        </>
    );
}

export default Todo;
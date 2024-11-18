import React from 'react';
import {TodoProvider} from "../../Context";
import TodoFoem from "./TodoFoem.jsx";
import TodoItem from "./TodoItem.jsx";

function Todo(props) {
    const  [todos, setTodos] = React.useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, {id: Date.now(), todo: todo, completed: false}]);
    };
    const updateTodo = (todo , id) => {
        setTodos(todos.map((t) => (t.id === id? todo : t)));
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };
    const toggleTodo = (id) => {
        setTodos(todos.map((t) => (t.id === id? {...t, completed:!t.completed} : t)));
    };
  React.useEffect(
      () => {
        const json = localStorage.getItem('todos');
        const todos = json? JSON.parse(json) : [];
        setTodos(todos);
      },
      []
    );

    React.useEffect(
      () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      },
      [todos]
    );

    return (
        <TodoProvider value={{setTodos, addTodo, updateTodo, deleteTodo, todos, toggleTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoFoem></TodoFoem>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here*/}

                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                            <TodoItem todo={todo} key={todo.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </TodoProvider>
    );
}

export default Todo;
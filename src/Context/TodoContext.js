import  React from 'react';
 export  const  TodoContext = React.createContext({
  todos: [],
      // add Todo  - adds a new todo to the list of todos, updates the list, and returns the new list of todos.
      addTodo: (todo) => {

      },

     // delete Todo
      deleteTodo: (id) => {},

     // update Todo
      updateTodo: ( todo , id) => {},

     // toggle Todo
      toggleTodo: (id) => {},

     // set todos

  setTodos: () => {},
 });


 export  const  UseTodo = () => {
  return React.useContext(TodoContext);
 };
 export  const  TodoProvider = TodoContext.Provider;


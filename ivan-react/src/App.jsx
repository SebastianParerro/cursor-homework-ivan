import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Button from "./components/Button";

const initTodos = [
  {
    value: "купити молоко",
    id: "sasqgh"
  },
  {
    value: "вивчити react",
    id: "sdfsgh"
  },
  {
    value: "почати займатися спортом",
    id: "shfdgh"
  },
];

function App() {
  const [todos, setTodos] = useState(initTodos);


  const removeListItem = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const clearListHandler = () => {
    console.log('хуй');
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} removeListItem={removeListItem} />
      <Button onClick={clearListHandler}>Clear all</Button>
    </div >
  );
}

export default App;
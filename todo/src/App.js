import React, { useState } from "react";
import TodoForm from "./components/todoForm.js";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo,...todos])
  }
  return (
    <div className="App">
      <p>React to do list</p>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const TodoForm = ( {addTodo} ) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };
  return (
    <form>
      <input type="text" value={todo.task} onChange={handleTaskInputChange} />
      <button type="submit" />
      submit
    </form>
  );
};

export default TodoForm;

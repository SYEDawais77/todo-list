import { useState } from "react";
import React from "react";

export default function AddTodo({ onAddTodo }) {
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoDescription) return;

    const newTodo = {
      id: Date.now(),
      description: todoDescription,
      completed: false,
    };
    onAddTodo(newTodo);
    setTodoDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

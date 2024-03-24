import React from "react";

export default function Todo({ task, onRemoveTask, onToggleCompleted }) {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleCompleted}
        style={{ height: "1.5rem", width: "1.5rem" }}
      />
      <label className="todo-text" style={{textDecoration:`${task.completed ? "line-through":""}`, opacity:`${task.completed ? 0.5:""}`}}>{task.description}</label>
      <button onClick={onRemoveTask}>Delete</button>
    </li>
  );
}

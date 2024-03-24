import React from "react";
import Todo from "./Todo";

export default function TodoList({ tasks, onRemoveTask, onToggleCompleted }) {
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((items) => {
          return (
            <Todo
              key={items.id}
              task={items}
              onRemoveTask={() => onRemoveTask(items.id)}
              onToggleCompleted={() => onToggleCompleted(items.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

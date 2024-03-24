import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function onAddTodoToList(task) {
    setTasks([...tasks, task]);
  }

  function handleRemoveTodo(id) {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  }

  function handleCompleteTask(id) {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const completedTasks = tasks.filter((item) => item.completed);
  const percentage = (completedTasks.length / tasks.length) * 100;

  

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo onAddTodo={onAddTodoToList} />
      <TodoList
        tasks={tasks}
        onRemoveTask={handleRemoveTodo}
        onToggleCompleted={handleCompleteTask}
      />
      {tasks.length > 0 && percentage !== 100 ? (
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "600" }}
        >
          You have {completedTasks.length} number of Task completed from{" "}
          {tasks.length}. ({Math.floor(percentage)}%)
        </p>
      ) : tasks.length === completedTasks.length && tasks.length !== 0 ? (
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "600" }}
        >
          You have Completed All Tasks. Congrats!!!
        </p>
      ) : (
        <p
          style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "600" }}
        >
          Start Adding Task(s) to the List.
        </p>
      )}
    </div>
  );
}

export default App;

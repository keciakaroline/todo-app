import React from "react";

export default function ClearTask({ todos, setTodos }) {
  // delete all tasks
  const clearTask = () => {
    let deleted = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(deleted);
  };
  return (
    <div className="ClearTask">
      <button value="clear" onClick={clearTask}>
        Clear Completed
      </button>
    </div>
  );
}

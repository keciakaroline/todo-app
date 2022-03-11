import React from "react";

export default function DeleteTask({ todos, setTodos }) {
  // delete all tasks
  const deleteTask = () => {
    let deleted = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(deleted);
  };
  return (
    <div className="DeleteTask">
      <button value="clear" onClick={deleteTask}>
        Clear all tasks
      </button>
    </div>
  );
}

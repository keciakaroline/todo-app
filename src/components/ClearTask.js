import React from "react";
import "./styles/ClearTask.css";

export default function ClearTask({ todos, setTodos }) {
  // delete all tasks
  const clearTask = () => {
    let deleted = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(deleted);
  };

  const itemsLeft = () => {
    let completedItems = [];
    let totalItems = todos.length;
    completedItems = todos.filter((todo) => todo.completed === true);
    return totalItems - completedItems.length;
  };

  return (
    <div className="ClearTask">
      <div className="itensLeft">
        <span>{itemsLeft()} items left</span>
      </div>
      <div>
        <button className="clearBtn" value="clear" onClick={clearTask}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

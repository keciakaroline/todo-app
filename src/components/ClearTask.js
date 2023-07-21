import React from "react";
import "./styles/ClearTask.css";

//* create itemsLeft
export const TaskLeft = ({ todos }) => {
  const itemsLeft = () => {
    let completedItems = [];
    let totalItems = todos.length;
    completedItems = todos.filter((todo) => todo.completed === true);
    return totalItems - completedItems.length;
  };
  return (
    <div className="items-left">
      <span>{itemsLeft()} items left</span>
    </div>
  );
};

//* delete all tasks
export const ClearTask = ({ todos, setTodos, deleteCompletedTodo }) => {
  const clearTask = () => {
    let deleted = todos.filter((todo) => {
      return !todo.completed;
    });
    setTodos(deleted);
  };
  return (
    <div className="ClearTask">
      <button
        className="clearBtn"
        value="clear"
        onClick={clearTask}
      >
        Clear Completed
      </button>
    </div>
  );
};

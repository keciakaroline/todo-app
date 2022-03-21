import React from "react";
import "./styles/List.css";
import { ReactComponent as CrossIcon } from "./styles/images/icon-cross.svg";

export default function List({ todo, text, todos, setTodos }) {
  // delete action -> if the btn.id is = the input.id
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  // complete action -> run for each
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="List">
      <button
        onClick={completeHandler}
        className={`complete-btn ${todo.completed ? "completed" : ""}`}
        // type="submit"
      ></button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <CrossIcon
        onClick={deleteHandler}
        className={`delete-btn ${todo.completed ? "completed" : ""}`}
      />
    </div>
  );
}

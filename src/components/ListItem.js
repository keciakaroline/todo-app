import React from "react";
import "./styles/ListItem.css";
import { ReactComponent as CrossIcon } from "./styles/images/icon-cross.svg";

export default function ListItem({ todo, onDeleteHandler, onCompleteHandler }) {
  return (
    <div className="List">
      <button
        onClick={onCompleteHandler}
        id="complete-btn"
        className={`complete-btn ${todo.completed ? "completed" : ""}`}
        // type="submit"
      ></button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <CrossIcon
        onClick={onDeleteHandler}
        id="delete-btn"
        className={`delete-btn ${todo.completed ? "completed" : ""}`}
      />
    </div>
  );
}

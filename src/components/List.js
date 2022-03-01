import React from "react";
import "./styles/List.css";

export default function List({ todo, text, todos, setTodos }) {
  //todos={todos} setTodos={setTodos}
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
        onClick={deleteHandler}
        className="delete-btn"
        // type="submit"
      ></button>
      <button
        onClick={completeHandler}
        className={`complete-btn ${todo.completed ? "completed" : ""}`}
        // type="submit"
      ></button>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
    </div>
  );
}

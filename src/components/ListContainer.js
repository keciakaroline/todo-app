import React from "react";
import List from "./List";
import "./styles/ListContainer.css";

export default function ListContainer({ todos, setTodos }) {
  //console.log(todos);
  return (
    <div className="List">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <List
            todos={todos}
            setTodos={setTodos}
            key={index}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

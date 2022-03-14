import React from "react";
import List from "./List";
import "./styles/ListContainer.css";

export default function ListContainer({ todos, setTodos, filter }) {
  //  console.log(filter);
  return (
    <div className="List">
      <ul className="todo-list">
        {filter.map((todo, index) => (
          <List
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

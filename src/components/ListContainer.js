import React from "react";

export default function ListContainer({ todos }) {
  console.log(todos);
  return (
    <div className="List">
      <ul className="todo-list"></ul>
    </div>
  );
}

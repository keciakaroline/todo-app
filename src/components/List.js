import React from "react";

export default function List() {
  return (
    <div className="List">
      <li className="todo-item">Hey</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

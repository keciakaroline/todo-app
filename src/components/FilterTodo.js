import React from "react";
import "./styles/FilterTodo.css";

export default function FilterTodo({ status, setStatus }) {
  const statusHandler = (event) => {
    //console.log(event.target.value);
    setStatus(event.target.value);
  };
  return (
    <div className="filter-todo">
      <button
        value="all"
        onClick={statusHandler}
        //className={`filter-item ${status === "all" ? "active-filter" : ""}`}
        //activeclassName="active"
      >
        All
      </button>
      <button
        value="active"
        onClick={statusHandler}
        //className={`filter-item ${status === "active" ? "active-filter" : ""}`}
        //activeclassName="active"
      >
        Active
      </button>
      <button
        value="completed"
        onClick={statusHandler}
        //className={`filter-item ${status === "completed" ? "active-filter" : ""}`}
        //activeclassName="active"
      >
        Completed
      </button>
    </div>
  );
}

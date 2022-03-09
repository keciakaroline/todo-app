import React from "react";
import "./styles/FilterTodo.css";

export default function FilterTodo({ filter, setFilter }) {
  const filterHandler = (event) => {
    //console.log(event.target.value);
    setFilter(event.target.value);
  };
  return (
    <div className="filter-todo">
      <button
        value="all"
        onClick={filterHandler}
        className={`filter-item ${filter === "all" ? "active-filter" : ""}`}
        //activeclassName="active"
      >
        All
      </button>
      <button
        value="active"
        onClick={filterHandler}
        className={`filter-item ${filter === "active" ? "active-filter" : ""}`}
        //activeclassName="active"
      >
        Active
      </button>
      <button
        value="completed"
        onClick={filterHandler}
        className={`filter-item ${
          filter === "completed" ? "active-filter" : ""
        }`}
        //activeclassName="active"
      >
        Completed
      </button>
    </div>
  );
}

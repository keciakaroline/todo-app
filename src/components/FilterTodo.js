import React from "react";

export default function FilterTodo() {
  return (
    <form>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
// <form>
//   <div className="select">
//     <ul className="filter-todo">
//       <li className="filter-item" activeClassName="active">
//        All</li>
//       <li className="filter-item" activeClassName="active">
//Completed</li>
//       <li className="filter-item" activeClassName="active">
//Uncompleted</li>
//     </ul>
//   </div>
// </form>

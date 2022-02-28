// Here we want to create the SubmitForm component
// that will be responsible for getting the input
// from the user and pass it to the other components.
// we need to create a 'form' element that contains 2 elements:
// input + submit button

import React from "react";
import { BsCircle } from "react-icons/bs";
import "./styles/SubmitForm.css";

export default function SubmitForm() {
  return (
    <div className="SubmitForm">
      <form>
        {/* <input type="checkbox" className="todo-input" /> */}
        <input
          type="text"
          placeholder="Create a new todo..."
          className="todo-input"
        />
        {/* <BsCircle className="todo-circle" /> */}
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

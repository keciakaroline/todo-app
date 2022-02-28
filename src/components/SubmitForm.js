// Here we want to create the SubmitForm component
// that will be responsible for getting the input
// from the user and pass it to the other components.
// we need to create a 'form' element that contains 2 elements:
// input + submit button

import React from "react";
import { BsCircle } from "react-icons/bs";
import "./styles/SubmitForm.css";

export default function SubmitForm({ input, setInput, todos, setTodos }) {
  const inputHandler = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput("");
  };

  return (
    <div className="SubmitForm">
      <form>
        {/* <input type="checkbox" className="todo-input" /> */}
        <input
          value={input}
          onChange={inputHandler}
          type="text"
          placeholder="Create a new todo..."
          className="todo-input"
        />
        {/* <BsCircle className="todo-circle" /> */}
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

import React from "react";
import "./styles/Form.css";

export default function Form({ inputText, setinputText, todos, setTodos }) {
  // changing the value of inputText
  const inputHandler = (event) => {
    // console.log(event.target.value);
    setinputText(event.target.value);
  };

  // add enter key event
  const keyDownHandler = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) submitHandler();
  };

  // Add a new todo
  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText("");
  };

  return (
    <div className="Form">
      <form>
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          // className="todo-input"
          value={inputText}
          onChange={inputHandler}
          onKeyDown={keyDownHandler}
        />
      </form>
    </div>
  );
}

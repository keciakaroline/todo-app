import React from "react";
import "./styles/Form.css";

export default function Form({
  refreshTodos,
  insertTodo,
  inputText,
  setinputText,
  todos,
}) {
  const min_length = 2;
  // changing the value of inputText
  const inputHandler = (event) => {
    //console.log(event.target.value);
    setinputText(event.target.value);
  };

  // add enter key event
  const keyDownHandler = (event) => {
    //event.preventDefault();
    if (event.keyCode === 13) submitHandler(event);
  };

  // Add a new todo
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputText.length > min_length) {
      insertTodo({
        text: inputText,
        completed: false,
      }).then(() => {
        refreshTodos();
      });
      setinputText("");
    } else {
      alert("You text is too small");
    }
  };

  return (
    <div className="Form">
      <form>
        <button
          onClick={submitHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <input
          maxLength={50}
          minLength={2}
          type="text"
          placeholder="Create a new todo..."
          className="todo-input"
          value={inputText}
          onChange={inputHandler}
          onKeyDown={keyDownHandler}
        />
      </form>
    </div>
  );
}

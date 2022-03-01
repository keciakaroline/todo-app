// we need to create a 'form' element that contains 2 elements:
// input + submit button

import React from "react";
import "./styles/Form.css";

export default function SubmitForm({
  inputText,
  setinputText,
  todos,
  setTodos,
}) {
  // changing the value of inputText
  const inputHandler = (event) => {
    // console.log(event.target.value);
    setinputText(event.target.value);
  };

  // on clicking enter key
  const keyDownHandler = (event) => {
    if (event.keyCode === 13) addTodo();
  };

  // add todo
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText("");
  };

  // add btn
  const submitHandler = () => addTodo();

  return (
    <div className="Form">
      <form>
        <button onClick={submitHandler} className="todo-button" type="submit">
          Add
        </button>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputText}
          className="todo-input"
          onChange={inputHandler}
          onKeyDown={keyDownHandler}
          autoFocus
        />
      </form>
    </div>
  );
}

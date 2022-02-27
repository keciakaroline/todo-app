// Here we want to create the SubmitForm component
// that will be responsible for getting the input
// from the user and pass it to the other components.
// we need to create a 'form' element that contains 2 elements:
// input + submit button

import React from "react";
import "./styles/SubmitForm.css";

export default function SubmitForm() {
  return (
    <div className="SubmitForm">
      <h1>T O D O</h1>
      <form>
        <input className="input" placeholder="Create a new todo..." />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import List from "./List";
import FilterTodo from "./FilterTodo";
import "./styles/TodoApp.css";

export default function TodoList() {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <>
      <Header />
      <header>
        <h1>T O D O</h1>
      </header>
      <SubmitForm todos={todos} setTodos={setTodos} setInput={setInput} />
      <List />
      <FilterTodo />
      <Footer />
    </>
  );
}

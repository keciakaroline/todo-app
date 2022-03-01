import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import ListContainer from "./ListContainer";
import FilterTodo from "./FilterTodo";
import "./styles/TodoApp.css";

export default function TodoList() {
  const [inputText, setinputText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  return (
    <>
      <Header />
      <header>
        <h1>T O D O</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setinputText={setinputText}
      />
      <ListContainer />
      <FilterTodo />
      <Footer />
    </>
  );
}

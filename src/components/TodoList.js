import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SubmitForm from "./SubmitForm";
import FilterTodo from "./FilterTodo";
import "./styles/TodoList.css";

export default function TodoList() {
  return (
    <>
      <Header />
      <header>
        <h1>T O D O</h1>
      </header>
      <SubmitForm />
      <FilterTodo />
      <Footer />
    </>
  );
}

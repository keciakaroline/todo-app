import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import FilterTodo from "./components/FilterTodo";
import "./App.css";

function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  return (
    <div className="App">
      <Header />
      <header>
        <h1>T O D O</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setinputText={setinputText}
        setFilter={setFilter} // Then go to where we have our selections
      />
      <ListContainer todos={todos} setTodos={setTodos} />
      <FilterTodo />
      <Footer />
    </div>
  );
}

export default App;

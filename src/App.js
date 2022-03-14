import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import FilterTodo from "./components/FilterTodo";
import ClearTask from "./components/ClearTask";
import "./App.css";

function App() {
  // use state
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  const [taskLeft, setTaskLeft] = useState(0);

  // use effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // create a filter
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilter(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      <header>
        <h1>T O D O</h1>
      </header>
      <Form
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
      />
      <ListContainer todos={todos} setTodos={setTodos} filter={filter} />
      <FilterTodo
        setStatus={setStatus} // Then go to where we have our selections
      />
      <ClearTask todos={todos} setTodos={setTodos} />
      <p className="drag-drop-line">Drag and drop to reorder list</p>
      <Footer />
    </div>
  );
}

export default App;

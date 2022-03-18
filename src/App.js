import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import FilterTodo from "./components/FilterTodo";
import ClearTask from "./components/ClearTask";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes";
import "./App.css";

function App() {
  // use state
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  const [theme, setTheme] = useState("light");

  // use effect for everytime we change todos, status -> filter
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

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <main className="App">
        <Header themeToggler={themeToggler} theme={theme} />

        <Form
          inputText={inputText}
          setinputText={setinputText}
          todos={todos}
          setTodos={setTodos}
        />
        <div className="container">
          <ListContainer todos={todos} setTodos={setTodos} filter={filter} />
          <div className="items-filters-clear-container">
            <FilterTodo
              setStatus={setStatus} // Then go to where we have our selections
            />
            <ClearTask todos={todos} setTodos={setTodos} />
          </div>
          <p className="drag-drop-line">Drag and drop to reorder list</p>
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import FilterTodo from "./components/FilterTodo";
import { TaskLeft, ClearTask } from "./components/ClearTask";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/Themes";
import "./App.css";
import {
  listTodos,
  insertTodo,
  deleteTodo,
  deleteCompletedTodo,
  updateTodo,
} from "./api/todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function App() {
  // use state
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  const [theme, setTheme] = useState("light");

  //* run once when the app start
  useEffect(() => {
    listTodos().then((result) => {
      setTodos(result.data);
    });
  }, []);

  //* to update a TODO
  const updateTodoHandler = (id, updatedTodo) => {
    updateTodo(id, updatedTodo)
      .then((result) => {
        listTodos().then((result) => {
          setTodos(result.data);
        });
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  //* use effect for everytime we change todos status -> filter
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //* create a filter
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
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  };

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <main className="App">
        <Header
          themeToggler={themeToggler}
          theme={theme}
        />

        <Form
          inputText={inputText}
          setinputText={setinputText}
          todos={todos}
          insertTodo={insertTodo}
          refreshTodos={() =>
            listTodos().then((result) => {
              setTodos(result.data);
            })
          }
        />
        <div className="container">
          <DragDropContext
            onDragEnd={(param) => {
              const srcI = param.source.index; //1st position of todo
              const desI = param.destination.index; //destination position of todo
              const [reOrder] = filter.splice(srcI, 1);
              //console.log(param);
              filter.splice(desI, 0, reOrder);
            }}
          >
            <Droppable droppableId="todo-1">
              {(provided, _) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <ListContainer
                    refreshTodos={() =>
                      listTodos().then((result) => {
                        setTodos(result.data);
                      })
                    }
                    deleteTodo={deleteTodo}
                    todos={todos}
                    setTodos={setTodos}
                    filter={filter}
                    updateTodoHandler={updateTodoHandler}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="items-filters-clear-container">
            <TaskLeft todos={todos} />
            <div className="for-desktop">
              <FilterTodo setStatus={setStatus} />
            </div>
            <ClearTask
              onUpdateHandler={updateTodoHandler}
              deleteCompletedTodo={deleteCompletedTodo}
              todos={todos}
              setTodos={setTodos}
              refreshTodos={() =>
                listTodos().then((result) => {
                  setTodos(result.data);
                })
              }
            />
          </div>
        </div>

        <div className="for-mobile">
          <FilterTodo setStatus={setStatus} />
        </div>

        <p className="drag-drop-line">Drag and drop to reorder list</p>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 1000,
});

export function listTodos() {
  return instance.get("/todos");
}

export function insertTodo(todo) {
  return instance.post("/todos", todo);
}

export function deleteTodo(id) {
  return instance.delete(`/todos/${id}`);
}

export function deleteCompletedTodo() {
  return instance.delete("/todos/completed");
}

export function updateTodo(id) {
  return instance.put(`/todos/${id}`);
}

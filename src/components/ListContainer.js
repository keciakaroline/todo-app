import React from "react";
import ListItem from "./ListItem";
import "./styles/ListContainer.css";
import { Draggable } from "react-beautiful-dnd";

export default function ListContainer({
  refreshTodos,
  deleteTodo,
  filter,
  updateTodoHandler,
}) {
  //* delete action
  const deleteHandler = (todo) => () => {
    deleteTodo(todo.id).then(() => refreshTodos());
  };

  //* complete action -> run for each
  const completeHandler = (todo) => () => {
    const updatedTodo = {
      completed: !todo.completed,
    };

    updateTodoHandler(todo.id, updatedTodo);
  };

  return (
    <div className="List">
      <ul className="todo-list">
        {filter.map((todo, index) => (
          <Draggable
            key={todo.id}
            draggableId={"todo-" + todo.id}
            index={index}
          >
            {(provided, _) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <ListItem
                  key={todo.id}
                  todo={todo}
                  index={index}
                  onCompleteHandler={completeHandler(todo)}
                  onDeleteHandler={deleteHandler(todo)}
                />
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </div>
  );
}

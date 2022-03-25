import React from "react";
import List from "./List";
import "./styles/ListContainer.css";
import { Draggable } from "react-beautiful-dnd";

export default function ListContainer({ todos, setTodos, filter }) {
  //console.log(filter);
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
                <List
                  todos={todos}
                  setTodos={setTodos}
                  key={todo.id}
                  text={todo.text}
                  todo={todo}
                  index={index}
                />
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </div>
  );
}

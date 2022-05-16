import React from "react";
import ListItem from "./ListItem";
import "./styles/ListContainer.css";
import { Draggable } from "react-beautiful-dnd";

export default function ListContainer({ todos, setTodos, filter }) {
  //console.log(filter);

  // delete action -> if the btn.id is = the input.id
  const deleteHandler = (todo) => () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  // complete action -> run for each
  const completeHandler = (todo) => () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
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

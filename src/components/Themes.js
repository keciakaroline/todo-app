import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyBackground: "hsl(0, 0%, 98%)",
  todoBackground: "hsl(0, 0%, 100%)",
  btnFilter: "hsl(235, 19%, 35%)",
  btnFocusFilter: "hsl(220, 98%, 61%)",
  btnHoverFilter: "hsl(235, 19%, 35%)",
  btnHoverClearCompleted: "hsl(235, 19%, 35%)",
  itemsLeftClearCompletedDragAndDrop: "hsl(236, 9%, 61%)",
  checkboxBorder: "hsl(236, 9%, 61%)",
  text: "hsl(235, 19%, 35%)",
  todoBorder: "hsl(0, 0%, 98%)",

  //   checkboxBorder: "hsl(236, 9%, 61%)" ???
};

export const darkTheme = {
  bodyBackground: "hsl(235, 21%, 11%)",
  todoBackground: "hsl(235, 24%, 19%)",
  btnFilter: "hsl(237, 25%, 84%)",
  btnFocusFilter: "hsl(220, 98%, 61%)",
  btnHoverFilter: "hsl(237, 25%, 84%)",
  btnHoverClearCompleted: "hsl(236, 33%, 92%)",
  itemsLeftClearCompletedDragAndDrop: "hsl(234, 11%, 52%)",
  checkboxBorder: "hsl(234, 11%, 52%)",
  text: "hsl(237, 25%, 84%)",
  todoBorder: "hsl(0, 0%, 98%)",

  //   checkboxBorder: "hsl(234, 11%, 52%)", ???
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.bodyBackground};
  }

  .Form,
  .List,
  .container{
    background-color: ${({ theme }) => theme.todoBackground};
  }

  .Form,
  .List,
  .Form .todo-input::placeholder {
    color: ${({ theme }) => theme.text};
  }

  .Form .todo-input {
    color: ${({ theme }) => theme.text};
  }

  .filter-item,
  .Footer a{
    color: ${({ theme }) => theme.btnFilter};
  }

  .items-left,
  .clearBtn,
  .drag-drop-line,
  .Footer{
    color: ${({ theme }) => theme.itemsLeftClearCompletedDragAndDrop};
  }

  .todo-button,
  .complete-btn{
    border: 1px solid ${(theme) => theme.checkboxBorder};
  }

  .clearBtn:hover {
    color: ${({ theme }) => theme.btnHoverClearCompleted};
  }

  .filter-todo button:focus {
    color: ${({ theme }) => theme.btnFocusFilter};
  }



   `;

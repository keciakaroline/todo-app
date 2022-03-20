import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  text: "hsl(235, 21%, 11%)",
  bodyBackground: "hsl(236, 33%, 92%)",
  todoBackground: "hsl(0, 0%, 98%)",
  todoBorder: "hsl(233, 11%, 84%)",
  checkboxBorder: "hsl(236, 9%, 61%)",
  placeholderAndCompletedTask: "hsl(236, 9%, 61%)",
  clearCompletedBtnHover: "hsl(235, 19%, 35%)",
  filtersBtnHover: "hsl(235, 21%, 11%)",

  // 'hsl(236, 9%, 61%)',
  // 'hsl(233, 11%, 84%)',
  // 'hsl(235, 19%, 35%)',
};

export const darkTheme = {
  bodyBackground: "hsl(235, 21%, 11%)",
  todoBackground: "hsl(235, 24%, 19%)",
  text: "hsl(234, 39%, 85%)",
  filtersBtnHover: "hsl(236, 33%, 92%)",
  placeholderAndCompletedTask: "hsl(234, 11%, 52%)",
  todoBorder: "hsl(237, 14%, 26%)",
  checkboxBorder: "hsl(234, 11%, 52%)",
  clearCompletedBtnHover: "hsl(234, 39%, 85%)",

  // hsl(234, 11%, 52%),
  // hsl(236, 33%, 92%),
  // hsl(233, 14%, 35%)'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bodyBackground};
  }

  .Form,
  .items-filters-clear-container,
  .filter-todo,
  .todo-list{
    background: ${({ theme }) => theme.todoBackground} 
  }

  .todo-button,
  .complete-btn {
    border: 1px solid ${({ theme }) => theme.checkboxBorder}
  }

  .todo-input,
  .todo-item{
    color: ${({ theme }) => theme.text}
  }

  .Form input::placeholder,
  .complete-btn.completed ~ .todo-item,
  .itensLeft,
  .clear-completed.btn,
  .filter-todo button,
  .drag-drop-line,
  .complete-btn button:focus,
  .complete-btn button:hover,
  .Footer {
    color: ${({ theme }) => theme.placeholderAndCompletedTask}
  }

  
  .List,
  .Footer{
    background: ${({ theme }) => theme.todoBackground}
    color: ${({ theme }) => theme.text}
    border-bottom: ${({ theme }) => theme.todoBorder}
  }

  .List {
    border-bottom: ${({ theme }) => theme.todoBorder}
  }

  .clearBtn:hover,
  .clearBtn:focus {
    color: ${({ theme }) => theme.clearCompletedBtnHover}
  }

  .filter-todo button:focus,
  .filter-todo button:hover,

  .Footer a:hover,
  .Footer a:focus{
    color: ${({ theme }) => theme.filtersBtnHover}
  }

  .todo-list {
    scrollbar-color: hsl(233, 13%, 49%) ${({ theme }) => theme.todoBackground}

  `;

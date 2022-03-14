import React from "react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was a challenge by{" "}
      <a
        href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
        target="_blank"
        rel="noopener noreferrer"
      >
        frontmentor.io
      </a>
      , coded by{" "}
      <a
        href="https://www.linkedin.com/in/keciasantos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kécia Karoline
      </a>{" "}
      and is{" "}
      <a href="/" target="_blank" rel="noopener noreferrer">
        open-sourced on GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify.
      </a>
    </footer>
  );
}

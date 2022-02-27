import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
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
    </div>
  );
}

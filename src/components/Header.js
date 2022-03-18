import React, { useState } from "react";
import "./styles/Header.css";
import { ReactComponent as SunIcon } from "./styles/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "./styles/images/icon-moon.svg";

export default function Header({ theme, themeToggler }) {
  const [rotate, setRotate] = useState(false);
  // change theme when clicking the icon
  const handleTheme = () => {
    themeToggler();
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  return (
    <div className="Header">
      <h1 className="title">TODO</h1>
      <button
        aria-label="theme-change"
        className={`theme-change ${rotate ? "rotate" : ""}`}
        onClick={handleTheme}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

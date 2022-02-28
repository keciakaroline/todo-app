import React, { useState } from "react";
import "./styles/Header.css";
import { ReactComponent as SunIcon } from "./styles/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "./styles/images/icon-moon.svg";

export default function Header() {
  let [lightMode, setLightMode] = useState(false);
  const handleClick = () => {
    setLightMode(!lightMode);
  };

  if (lightMode === true) {
    console.log(true);
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }

  return (
    <div className="Header">
      <span className="icon-change" onClick={handleClick}>
        {lightMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  );
}

import React, { useState } from "react";
import { ReactComponent as SunIcon } from "../images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../images/icon-moon.svg";

export default function Header() {
  let [lightMode, setLightMode] = useState(false);
  const setLightModeBody = () => {
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
      <span className="icon-change" onClick={setLightModeBody}>
        {lightMode ? <MoonIcon /> : <SunIcon />}
      </span>
    </div>
  );
}

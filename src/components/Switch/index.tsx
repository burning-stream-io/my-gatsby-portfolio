import React, { useState } from "react";
import "./index.css";
const Switch = () => {
  const themeFromLocalStorage = localStorage.getItem("theme");
  const [isToggled, setIsToggled] = useState(
    themeFromLocalStorage && themeFromLocalStorage === "light" ? false : true
  );
  const handleToggle = () => {
    setIsToggled((prev) => {
      const theme = !prev ? "dark" : "light";
      const body = document.querySelector("body");
      if (body) {
        body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
      }
      return !prev;
    });
  };
  return (
    <button
      onClick={handleToggle}
      className={`toggler ${isToggled ? "toggled" : ""}`}
    >
      <span className={`swicth ${isToggled ? "switched" : ""}`} />
    </button>
  );
};

export default Switch;

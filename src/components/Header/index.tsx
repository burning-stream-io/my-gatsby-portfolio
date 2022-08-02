import React, { FC, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Link } from "gatsby";
import Switch from "../Switch";
import "./index.css";

const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const handleMenu = (withoutTimer?: boolean) => {
    if (withoutTimer) {
      setIsMenuOpened(!isMenuOpened);
    }
    setTimeout(() => {
      setIsMenuOpened(!isMenuOpened);
    }, 800);
  };
  const navs: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    { name: "SKills & Experience", path: "/experience/" },
    { name: "Education & Certificates", path: "/about/" },
    { name: "Contact", path: "/contact/" },
  ];
  const isBrowser = () => typeof window !== "undefined";

  const themeFromLocalStorage = isBrowser()
    ? localStorage.getItem("theme")
    : null;
  const [isToggled, setIsToggled] = useState(
    !(themeFromLocalStorage && themeFromLocalStorage === "light")
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
    <div className="navbar">
      <div className="logo">Hewr</div>
      <nav className="nav">
        <div className="burgermenu-container">
          <button
            onClick={() => handleMenu(true)}
            className={`burgermenu ${isMenuOpened ? "opened" : ""}`}
          >
            <span />
          </button>
        </div>
        <ul className={`${isMenuOpened ? "show-menu" : "hide-menu"}`}>
          {navs.map((nav, i) => (
            <li key={i}>
              <Link
                partiallyActive={false}
                onClick={() => handleMenu()}
                to={nav.path}
                className="list-button"
                activeClassName="active"
              >
                {nav.name}
              </Link>
            </li>
          ))}

          <li className={`list-button`}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRegSun />
              <Switch toggled={isToggled} onToggle={handleToggle} />
              <FaRegMoon />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";

const Header = (): JSX.Element => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <nav className="nav">
        <ul>
          <li className="list-button active">Home</li>
          <li className="list-button">About</li>
          <li className="list-button">Content</li>
          <li className="list-button">Projects</li>
          <li className="list-button">Certificates</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../../images/logo.png";
import "../../App.css";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="Breaking Bad Logo" />
    </header>
  );
};

export default Header;

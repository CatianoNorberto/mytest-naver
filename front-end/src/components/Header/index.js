import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <span>Sair</span>
      </Link>
    </div>
  );
}

export default Header;

import React from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt=" A Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly >Cart (0)</Button>
      </nav>
    </header>
  );
}

export default Header;

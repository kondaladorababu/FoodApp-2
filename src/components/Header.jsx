import React, { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const noOfItemsInCart = cartCtx.items.length;

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt=" A Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({noOfItemsInCart})</Button>
      </nav>
    </header>
  );
}

export default Header;

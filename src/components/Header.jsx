import React, { useContext } from "react";
import logoImage from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

function Header() {
  const cartCtx = useContext(CartContext);
  const noOfItemsInCart = cartCtx.items.length;

  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt=" A Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({noOfItemsInCart})
        </Button>
      </nav>
    </header>
  );
}

export default Header;

import React, { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "../components/UI/Button.jsx";

import { currencyFormatter } from "../util/Formatting.js";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

function Cart() {
  const cartCtx = useContext(CartContext);
  const ItemsInCart = cartCtx.items;

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Title</h2>
      <ul>
        {ItemsInCart.map((item) => (
          <CartItem key={item.id} {...item} onIncrease={()=>{cartCtx.addItem(item)}} onDecrease={()=>{cartCtx.removeItem(item.id)}}/>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;

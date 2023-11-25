import React, { useContext } from "react";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/Formatting";
import Input from "./UI/Input";

import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const userProgressCtx = useContext(UserProgressContext);

  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    // console.log(customerData);
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
        <Input label={"Full name"} type={"text"} id={"full-name"} />
        <Input label={"E-Mail Address"} type={"email"} id={"email"} />
        <Input label={"Street"} type={"text"} id={"street"} />

        <div className="control-row">
          <Input label={"Postal code"} type={"text"} id={"postal-code"} />
          <Input label={"City"} type={"text"} id={"city"} />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;

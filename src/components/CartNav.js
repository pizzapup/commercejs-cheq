import React, { useState } from "react";
import Cart from "./Cart";
import "./Nav.css";
import CartIcon from "../assets/icons/CartIcon";
import CloseIcon from "../assets/CloseIcon";

const CartNav = ({ cart, onRemoveFromCart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  const renderOpenButton = () => (
    <button className="nav__cart-btn  nav__cart-btn--open">
      <CartIcon className="cart-icon" />
      {cart !== null ? (
        <span className="nav__cart-total">
          <span className="nav__cart-total-text">{cart.total_items}</span>
        </span>
      ) : (
        ""
      )}
    </button>
  );

  const renderCloseButton = () => (
    <button className="nav__cart-btn nav__cart-btn--close ">
      <CloseIcon />
    </button>
  );

  return (
    <div className="nav">
      <div className="logo">E-Commerce</div>
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
        {!isCartVisible ? renderOpenButton() : renderCloseButton()}
      </div>
      {isCartVisible && (
        <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />
      )}
    </div>
  );
};

export default CartNav;

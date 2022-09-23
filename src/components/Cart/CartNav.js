import React, { useState } from "react";
import Cart from "./Cart";
import PropTypes from "prop-types";
import CartIcon from "../../assets/icons/CartIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import "./CartNav.css";

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const [isCartVisible, setCartVisible] = useState(false);

  return (
    <div className="nav">
      <div className="logo">E-Commerce</div>
      <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
        {!isCartVisible ? (
          <button className="nav__cart-open">
            <CartIcon className="nav-icon cart-icon" />
            {cart !== null ? (
              <span className="nav__cart-total">{cart.total_items}</span>
            ) : (
              ""
            )}
          </button>
        ) : (
          <button className="nav__cart-close">
            <CloseIcon className="nav-icon close-icon" />
          </button>
        )}
      </div>
      {isCartVisible && (
        <Cart
          cart={cart}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          onEmptyCart={onEmptyCart}
        />
      )}
    </div>
  );
};

export default CartNav;

CartNav.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
  onEmptyCart: PropTypes.func,
};

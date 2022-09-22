import React from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart, onRemoveFromCart }) => {
  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }
    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  };

  const renderItems = () =>
    cart.line_items.map((lineItem) => (
      <CartItem
        className="cart__inner"
        item={lineItem}
        onRemoveFromCart={onRemoveFromCart}
        key={lineItem.id}
      />
    ));

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );
  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      {renderEmptyMessage()}
      {renderItems()}
      {renderTotal()}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
};

export default Cart;

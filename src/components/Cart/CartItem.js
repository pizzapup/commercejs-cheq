import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/icons/CloseIcon";

const CartItem = ({ item, onRemoveFromCart }) => {
  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={item.media.source}
        alt={item.name}
      />
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <p>{item.quantity}</p>
        </div>
        <div className="cart-item__details-price">
          {item.line_total.formatted_with_symbol}
        </div>
      </div>
      <button
        type="button"
        className="cart-item__remove btn"
        onClick={handleRemoveFromCart}
        title="remove item"
      >
        <CloseIcon fill="red" className="remove-icon" />
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;

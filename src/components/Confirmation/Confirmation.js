import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import "./Confirmation.css";

class Confirmation extends Component {
  renderOrderSummary() {
    const { order, onBackToHome } = this.props;

    if (!order) {
      return null;
    }

    return (
      <div className="confirmation">
        <div className="confirmation__wrapper">
          <div className="confirmation__wrapper-message">
            <h4>
              Thank you for your purchase, {order.customer.firstname}{" "}
              {order.customer.lastname}!
            </h4>
            <p className="confirmation__wrapper-reference">
              <span>Order ref:</span> {order.customer_reference}
            </p>
          </div>
          <Link
            className="confirmation__wrapper-back"
            type="button"
            to="/"
            onClick={onBackToHome}
          >
            <ArrowLeft />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return <>{this.renderOrderSummary()}</>;
  }
}

export default Confirmation;

Confirmation.propTypes = {
  order: PropTypes.object,
  onBackToHome: PropTypes.func,
};

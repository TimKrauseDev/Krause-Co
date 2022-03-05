import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DropDownItem from "./DropDownItem";

const renderCartProducts = (products) => {
  if (products.length === 0) {
    return (
      <p className="text-muted text-center m-0 py-2">
        No items currently in basket.
      </p>
    );
  }

  return products.map((product, index) => {
    if (index === 3) {
      return (
        <p key={index} className="text-muted text-center m-0 py-2">
          View basket to see all items
        </p>
      );
    } else if (index > 3) {
      return null;
    }

    return <DropDownItem key={index} product={product} />;
  });
};

const ShoppingCartDropdown = ({ shoppingSession, closeDropdown }) => {
  return (
    <div className="container">
      <div className="shopping-cart border border-dark mx-md-5">
        <div className="shopping-cart-header">
          <i className="fa fa-shopping-basket cart-icon"></i>
          <span className="badge bg-dark">
            {shoppingSession ? shoppingSession.products.length : 0}
          </span>
          <div className="shopping-cart-total">
            <span className="lighter-text">Total: </span>
            <span className="main-color-text">
              ${shoppingSession ? shoppingSession.total : 0}
            </span>
          </div>
        </div>

        <ul className="shopping-cart-items">
          {shoppingSession && renderCartProducts(shoppingSession.products)}
          {shoppingSession === false && (
            <p className="text-muted text-center m-0 py-2">
              Please login to add items to your basket.
            </p>
          )}
        </ul>

        <div className="shopping-cart-buttons">
          {shoppingSession && (
            <Link
              to="/account/basket"
              className="btn text-uppercase"
              onClick={closeDropdown}
            >
              View Basket
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ shoppingSession }) => {
  return { shoppingSession };
};

export default connect(mapStateToProps, null)(ShoppingCartDropdown);

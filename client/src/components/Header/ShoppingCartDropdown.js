import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DropDownItem from "./DropDownItem";

const renderCartProducts = (products) =>
  products.map((product, index) => {
    if (index === 3) {
      return (
        <p key={index} className="text-muted m-0 seemore">
          ...
        </p>
      );
    } else if (index > 3) {
      return null;
    }

    return <DropDownItem key={index} product={product} />;
  });

const ShoppingCartDropdown = ({ shoppingSession }) => {
  return (
    <div className="container">
      <div className="shopping-cart border border-dark mx-lg-5">
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
        </ul>

        <div className="shopping-cart-buttons">
          <Link to="/cart" className="button bg-warning text-dark">
            View Basket
          </Link>
          <Link to="/checkout" className="button bg-success">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ shoppingSession }) => {
  return { shoppingSession };
};

export default connect(mapStateToProps, null)(ShoppingCartDropdown);

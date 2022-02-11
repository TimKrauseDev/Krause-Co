import React from "react";
import { connect } from "react-redux";

import DropDownItem from "./DropDownItem";

const renderCartProducts = (products) =>
  products.map((product, index) => (
    <DropDownItem key={index} product={product} />
  ));

const ShoppingCartDropdown = ({ shoppingSession }) => {
  return (
    <div className="container">
      <div className="shopping-cart border border-dark mx-lg-5">
        <div className="shopping-cart-header">
          <i className="fa fa-shopping-basket cart-icon"></i>
          <span className="badge bg-dark">3</span>
          <div className="shopping-cart-total">
            <span className="lighter-text">Total:</span>
            <span className="main-color-text">$2,229.97</span>
          </div>
        </div>

        <ul className="shopping-cart-items">
          {shoppingSession && renderCartProducts(shoppingSession.products)}
        </ul>

        <a href="/" className="button bg-success">
          Checkout
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = ({ shoppingSession }) => {
  return { shoppingSession };
};

export default connect(mapStateToProps, null)(ShoppingCartDropdown);

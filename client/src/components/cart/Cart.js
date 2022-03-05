import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import CartItem from "./CartItem";

const renderCartProducts = (userID, products) =>
  products.map((product, index) => (
    <CartItem key={index} userID={userID} product={product} />
  ));

const renderEmptyCart = () => {
  return (
    <section className="empty-cart col-md-8 pb-5">
      <div className="row">
        <h3 className="">Shopping Basket</h3>
      </div>
      <hr />
      <div className="row">
        <div className="empty-cart d-md-flex align-items-md-center w-75 m-auto">
          <div className="container text-center space-2 space-3--lg">
            <div className="w-md-80 w-lg-60 text-center mx-md-auto">
              <div className="mb-5">
                <h1 className="h2">Your cart is currently empty</h1>
                <p>
                  Before proceed to checkout you must add some products to your
                  shopping basket. You will find a lot of interesting products
                  on our "Shop" page.
                </p>
              </div>
              <Link to="/shop" className="btn text-uppercase">
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const handleCheckout = async (products, user_id, email) => {
  const lineItems = [];

  products.forEach((product) => {
    lineItems.push({
      price: product.stripePriceID,
      quantity: product.quantity,
    });
    return product;
  });

  const res = await axios.post(`/api/create-checkout-session`, {
    lineItems,
    user_id,
    email,
  });

  window.location = res.data.url;
};

const Cart = ({ shoppingSession }) => {
  const navigate = useNavigate();

  if (shoppingSession) {
    if (shoppingSession.products.length === 0) {
      return renderEmptyCart();
    } else {
      return (
        <section id="cart" className="col-md-8 pb-5">
          <div className="row">
            <h3 className="">Shopping Basket</h3>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-8 cart-content p-4">
              {renderCartProducts(
                shoppingSession.user_id,
                shoppingSession.products
              )}

              <div className="back-to-shop">
                <div
                  className="back-to-shop-button d-inline-block pointer"
                  onClick={() => navigate(-1)}
                >
                  <i className="fa fa-arrow-left me-2"></i>
                  <span className="text-muted">Back to shop</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 summary p-4">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />

              <div className="row">
                <div className="col">Subtotal</div>
                <div className="col text-right">{`$ ${shoppingSession.total.toFixed(
                  2
                )}`}</div>
              </div>
              <div className="row p-2 py-4">
                <button
                  className="btn checkout text-uppercase"
                  onClick={() =>
                    handleCheckout(
                      shoppingSession.products,
                      shoppingSession.user_id,
                      shoppingSession.email
                    )
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
      );
    }
  } else {
    return renderEmptyCart();
  }
};

const mapStateToProps = ({ shoppingSession }) => {
  return { shoppingSession };
};

export default connect(mapStateToProps, null)(Cart);

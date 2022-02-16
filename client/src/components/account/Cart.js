import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";

const renderCartProducts = (userID, products) =>
  products.map((product, index) => (
    <CartItem key={index} userID={userID} product={product} />
  ));

const Cart = ({ shoppingSession }) => {
  const navigate = useNavigate();

  if (shoppingSession) {
    return (
      <section id="cart">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart-content">
              <div className="card-header px-0 bg-light">
                <div className="row">
                  <div className="col col-8 px-0 my-auto">
                    <h2 className="card-header-title m-0">
                      <strong>Shopping Basket</strong>
                    </h2>
                  </div>
                  <div className="col col-4 my-auto">
                    <p className="card-header-item-count text-muted m-0">
                      {`${shoppingSession.products.length} items`}
                    </p>
                  </div>
                </div>
              </div>
              {renderCartProducts(
                shoppingSession.user_id,
                shoppingSession.products
              )}
              <div className="back-to-shop" onClick={() => navigate(-1)}>
                <div className="back-to-shop-button d-inline-block">
                  <i className="fa fa-arrow-left me-2"></i>
                  <span className="text-muted">Back to shop</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col">{`${shoppingSession.products.length} items`}</div>
                <div className="col text-right">{`$ ${shoppingSession.total.toFixed(
                  2
                )}`}</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select>
                  <option className="text-muted">
                    Standard Delivery - $ 5.00
                  </option>
                </select>
              </form>
              <div className="row">
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">{`$ ${(
                  shoppingSession.total + 5
                ).toFixed(2)}`}</div>
              </div>{" "}
              <button className="btn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = ({ shoppingSession }) => {
  return { shoppingSession };
};

export default connect(mapStateToProps, null)(Cart);

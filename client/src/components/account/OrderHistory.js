import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

const renderEmptyOrderHistory = () => {
  return (
    <div className="empty-order-history d-md-flex align-items-md-center height-100vh--md">
      <div className="container text-center space-2 space-3--lg">
        <div className="w-md-80 w-lg-60 text-center mx-md-auto">
          <div className="mb-5">
            <div className="icon-background">
              <span className="fa fa-shopping-basket"></span>
            </div>
            <h1 className="h2">Your order history is currently empty.</h1>
          </div>
          <Link to="/shop" className="btn btn-dark btn-wide">
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderOrderItems = (products) =>
  products.map((product, index) => {
    console.log(product);

    return (
      <div className="cart-item row border-top border-bottom" key={index}>
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              className="img-fluid"
              src={require(`../../imgs/products/${product.image}`)}
              alt="test"
            />
          </div>
          <div className="col">
            <div className="row">{product.product_name}</div>
            <div className="row text-muted">
              $ {(product.subtotal / product.quantity).toFixed(2) || 0.0} each
            </div>
          </div>
          <div className="cart-quantity col text-center m-auto">
            <div
              className="cart-quantity-number"
              style={{ display: "inline-block" }}
            >
              Qty{product.quantity}
            </div>
          </div>
          <div className="col text-end fs-6 fw-normal">
            $ {product.subtotal.toFixed(2)}
          </div>
        </div>
      </div>
    );
  });
const renderOrders = (orders) =>
  orders.map((order, index) => {
    const orderDate = new Date(order.created_at);

    return (
      <div key={index}>
        <h4>
          {(orderDate.getMonth() > 8
            ? orderDate.getMonth() + 1
            : "0" + (orderDate.getMonth() + 1)) +
            "/" +
            (orderDate.getDate() > 9
              ? orderDate.getDate()
              : "0" + orderDate.getDate()) +
            "/" +
            orderDate.getFullYear()}
        </h4>

        {renderOrderItems(order.products)}
        <p className="text-end py-2">Total: {order.total}</p>
      </div>
    );
  });

const OrderHistory = ({ auth, orderHistory, fetchOrderHistory }) => {
  useEffect(() => {
    if (auth) {
      fetchOrderHistory(auth._id);
    }
  }, [auth, fetchOrderHistory]);

  if (!orderHistory) {
    return <div>Loading...</div>;
  }

  return (
    <div id="order-settings" className="col-md-8 pb-5">
      <div className="row">
        <h3 className="">Order History</h3>
      </div>
      <hr />
      {orderHistory.length > 0 && renderOrders(orderHistory)}
      {orderHistory.length === 0 && renderEmptyOrderHistory()}
    </div>
  );
};

const mapStateToProps = ({ auth, orderHistory }) => {
  return { auth, orderHistory };
};

export default connect(mapStateToProps, actions)(OrderHistory);

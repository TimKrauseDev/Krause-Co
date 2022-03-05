import React, { useState } from "react";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";

import * as actions from "../../actions";

const handleQuantityUpdate = (
  userID,
  productID,
  newQty,
  productInventory,
  updateProductQuantity,
  setShowToastFailure
) => {
  if (newQty <= 0 || newQty > productInventory) {
    setShowToastFailure(true);
    return;
  }

  updateProductQuantity(userID, {
    _id: productID,
    new_qty: newQty,
  });
};

const CartItem = ({
  userID,
  product,
  removeProductFromShoppingSession,
  updateProductQuantity,
}) => {
  const [showToastFailure, setShowToastFailure] = useState(false);

  return (
    <div className="cart-item row pb-4">
      <div className="row main align-items-center">
        <div className="col-2">
          <img
            className="img-fluid"
            src={require(`../../imgs/products/${product.image}`)}
            alt="product"
          />
        </div>
        <div className="col">
          <div className="row">{product.product_name}</div>
          <div className="row text-muted">
            $ {product.subtotal / product.quantity || 0} each
          </div>
        </div>
        <div className="cart-quantity col text-center m-auto">
          <div
            className="cart-quantity-decrease pointer"
            style={{ display: "inline-block" }}
            onClick={() =>
              handleQuantityUpdate(
                userID,
                product._id,
                product.quantity - 1,
                product.productInventory,
                updateProductQuantity,
                setShowToastFailure
              )
            }
          >
            -
          </div>
          <div
            className="cart-quantity-number p-2"
            style={{ display: "inline-block" }}
          >
            {product.quantity}
          </div>
          <div
            className="cart-quantity-increase pointer"
            style={{ display: "inline-block" }}
            onClick={() =>
              handleQuantityUpdate(
                userID,
                product._id,
                product.quantity + 1,
                product.productInventory,
                updateProductQuantity,
                setShowToastFailure
              )
            }
          >
            +
          </div>
        </div>
        <div className="col text-end fs-6 fw-normal">
          $ {product.subtotal.toFixed(2)}
          <i
            className="remove-product fa fa-solid fa-recycle ms-2 pointer"
            onClick={() =>
              removeProductFromShoppingSession(userID, {
                _id: product._id,
              })
            }
          ></i>
        </div>
      </div>
      {/* Toast Failure */}
      <Toast
        onClose={() => setShowToastFailure(false)}
        show={showToastFailure}
        delay={3000}
        autohide
        className="border-2 border-dark m-2 p-0"
        style={{ position: "fixed", top: "0px", right: "0px" }}
      >
        <Toast.Header className="text-white bg-danger" closeVariant="white">
          <p className="me-auto mb-0 text-uppercase">Warning</p>
        </Toast.Header>
        <Toast.Body className="bg-white">
          Quantity cannot exceed inventory amount or go to 0. If you would like
          to remove item from cart, please use recycle icon.
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default connect(null, actions)(CartItem);

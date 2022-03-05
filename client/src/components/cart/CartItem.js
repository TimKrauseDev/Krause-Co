import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

const handleQuantityUpdate = (
  userID,
  productID,
  newQty,
  productInventory,
  updateProductQuantity
) => {
  if (newQty <= 0 || newQty > productInventory) {
    console.log("hit");
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
  return (
    <div className="cart-item row pb-4">
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
            $ {product.subtotal / product.quantity || 0} each
          </div>
        </div>
        <div className="cart-quantity col text-center m-auto">
          <div
            className="cart-quantity-decrease"
            style={{ display: "inline-block" }}
            onClick={() =>
              handleQuantityUpdate(
                userID,
                product._id,
                product.quantity - 1,
                product.productInventory,
                updateProductQuantity
              )
            }
          >
            -
          </div>
          <div
            className="cart-quantity-number"
            style={{ display: "inline-block" }}
          >
            {product.quantity}
          </div>
          <div
            className="cart-quantity-increase"
            style={{ display: "inline-block" }}
            onClick={() =>
              handleQuantityUpdate(
                userID,
                product._id,
                product.quantity + 1,
                product.productInventory,
                updateProductQuantity
              )
            }
          >
            +
          </div>
        </div>
        <div className="col text-end fs-6 fw-normal">
          $ {product.subtotal.toFixed(2)}
          <i
            className="remove-product fa fa-solid fa-recycle ms-2"
            onClick={() =>
              removeProductFromShoppingSession(userID, {
                _id: product._id,
              })
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(CartItem);

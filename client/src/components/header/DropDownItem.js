import React from "react";

const DropDownItem = ({ product }) => {
  return (
    <li className="shopping-cart-item">
      <div className="image-container">
        <img
          src={require(`../../imgs/products/${product.image}`)}
          alt="item1"
        />
      </div>
      <div className="item-content">
        <div className="item-name font-weight-bold">
          <p className="font-weight-bold">
            <strong>{product.product_name}</strong>
          </p>
        </div>
        <div className="item-price">
          <p>
            <span className="text-muted">$ </span>
            {product.subtotal.toFixed(2)}
          </p>
        </div>
        <div className="item-quantity text-end">
          <p>
            <span className="text-muted">Qty: </span>
            {product.quantity}
          </p>
        </div>
      </div>
    </li>
  );
};

export default DropDownItem;

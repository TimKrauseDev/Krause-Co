import React from "react";

const DropDownItem = ({ product, key }) => {
  console.log("hit1");
  return (
    <li className="clearfix" key={key}>
      <img
        src={require(`../../imgs/products/${product.image}`)}
        style={{ width: "100px" }}
        alt="item1"
      />
      <span className="item-name">{product.product_name}</span>
      <span className="item-price">${product.price}</span>
      <span className="item-quantity text-end">{product.subtotal}</span>
    </li>
  );
};

export default DropDownItem;

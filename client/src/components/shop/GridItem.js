import React from "react";

const GridItem = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm  ">
        <img
          className="cart-image-top  "
          alt={product.name}
          src={require(`../../imgs/products/${product.img}`)}
        />

        <div className="card-body d-flex flex-column justify-content-between ">
          <div className="card-body-top pb-2">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card--subtitle mb-2 text-muted">{product.type}</h6>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-body-bottom"></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </div>
            <small className="text-muted">${product.price.toFixed(2)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;

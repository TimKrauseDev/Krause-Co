import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

import { Toast } from "react-bootstrap";

const validateProductCount = (el, inv, setProductCount) => {
  const num = parseInt(el.target.value);
  if (num > inv) {
    setProductCount(inv);
  } else if (num < 0) {
    setProductCount(0);
  } else {
    setProductCount(parseInt(el.target.value) || 0);
  }
};

const renderPageNotFound = () => {
  return (
    <section id="product" className="p-5">
      <div className="empty-order-history d-md-flex align-items-md-center">
        <div className="container text-center space-2 space-3--lg">
          <div className="w-md-80 w-lg-60 text-center mx-md-auto">
            <div className="mb-5">
              <h1 className="h2">404. Page not found.</h1>
            </div>
            <Link to="/shop" className="btn btn-dark btn-wide">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Product = ({
  fetchProductBySlug,
  addProductToShoppingSession,
  prod,
  auth,
  shoppingSession,
}) => {
  const slug = useParams().slug || "No Product";
  const [productCount, setProductCount] = useState(1);
  const [showToastFailure, setShowToastFailure] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);

  useEffect(() => {
    fetchProductBySlug(slug);
  }, [fetchProductBySlug, slug]);

  if (!prod) {
    return renderPageNotFound();
  }

  const addToShoppingSession = (productCount, product, auth) => {
    if (!productCount) return;
    if (!auth) {
      setShowToastFailure(true);
      return;
    }

    /**
     * TODO:
     * - Add validation to make sure item isn't already in Cart
     * - If item is in cart, increase the quantity of item that is already in cart.
     */
    const productData = {
      product_id: product._id,
      product_name: product.name,
      image: product.img,
      quantity: productCount,
      subtotal: productCount * product.price,
      productInventory: product.inventory,
      stripePriceID: product.stripePriceID,
    };

    addProductToShoppingSession(shoppingSession.user_id, productData);
    setShowToastSuccess(true);
  };

  return (
    <section id="product" className="py-5">
      {prod && (
        <div className="container-xl px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                alt={prod.name}
                src={require(`../../imgs/products/${prod.img}`)}
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1 text-capitalize text-muted">
                {prod.type}
              </div>
              <h1 className="display-5 fw-bolder">{prod.name}</h1>
              <div className="fs-5 mb-3">
                <span>{`$ ${prod.price.toFixed(2)}`}</span>
              </div>
              <p className="lead">{prod.description}</p>
              <div className="row my-3">
                <div className="col">
                  <p>
                    <span className="fw-bold">Botanical Name: </span>
                    {prod.botanical_name || "N/A"}
                  </p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <p>
                    <span className="fw-bold">Seeds Per Packet: </span>
                    {prod.seeds_per_packet || "N/A"}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="fw-bold">Zones: </span>
                    {prod.zones.map((zone, idx, arr) => {
                      if (arr.length - 1 === idx) {
                        return zone;
                      } else {
                        return zone + ", ";
                      }
                    })}
                  </p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <p>
                    <span className="fw-bold">Sun: </span>
                    {prod.sun || "N/A"}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="fw-bold">Fruit Color: </span>
                    {prod.fruit_color || "N/A"}
                  </p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <p>
                    <span className="fw-bold">In Stock: </span>
                    {prod.inventory || "0"}
                  </p>
                </div>
              </div>
              <div className="small mb-1 text-capitalize fw-bold">Quantity</div>

              <div className="d-flex">
                <input
                  className="form-control text-center me-3 w-auto"
                  id="inputQuantity"
                  type="number"
                  value={productCount}
                  min="0"
                  max={prod.inventory}
                  onChange={(e) =>
                    validateProductCount(e, prod.inventory, setProductCount)
                  }
                />
                <button
                  className="btn flex-shrink-0 text-uppercase"
                  type="button"
                  onClick={() => addToShoppingSession(productCount, prod, auth)}
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Toast Failure */}
      <Toast
        onClose={() => setShowToastFailure(false)}
        show={showToastFailure}
        delay={3000}
        autohide
        className="border-2 border-dark m-2"
        style={{ position: "fixed", top: "0px", right: "0px" }}
      >
        <Toast.Header className="text-white bg-danger" closeVariant="white">
          <p className="me-auto mb-0 text-uppercase">Warning</p>
        </Toast.Header>
        <Toast.Body className="bg-white">
          Please sign in to add items to basket.
        </Toast.Body>
      </Toast>
      {/* Toast Sucess */}
      <Toast
        onClose={() => setShowToastSuccess(false)}
        show={showToastSuccess}
        delay={3000}
        autohide
        className="border-2 border-dark m-2"
        style={{ position: "fixed", top: "0px", right: "0px" }}
      >
        <Toast.Header className="text-white" closeVariant="white">
          <p className="me-auto mb-0 text-uppercase">Awesome!</p>
        </Toast.Header>
        <Toast.Body className="bg-white">
          {`${prod.name} has been successfully added to your basket.`}
        </Toast.Body>
      </Toast>
    </section>
  );
};

const mapStateToProps = ({ prod, auth, shoppingSession }) => {
  return { prod, auth, shoppingSession };
};

export default connect(mapStateToProps, actions)(Product);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

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

const Product = ({
  fetchProductBySlug,
  addProductToShoppingSession,
  prod,
  auth,
  shoppingSession,
}) => {
  const slug = useParams().slug || "No Product";
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    fetchProductBySlug(slug);
  }, [fetchProductBySlug, slug]);

  const addToShoppingSession = (productCount, product) => {
    if (!productCount) return;

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
  };

  return (
    <section id="product" className="py-5">
      {!prod && <h2 className="text-center">No Product</h2>}
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
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={() => addToShoppingSession(productCount, prod)}
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = ({ prod, auth, shoppingSession }) => {
  return { prod, auth, shoppingSession };
};

export default connect(mapStateToProps, actions)(Product);

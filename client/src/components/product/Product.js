import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

const Product = ({ fetchProductBySlug, prod }) => {
  const slug = useParams().slug || "No Product";
  const [productCount, setProductCount] = useState(1);

  useEffect(() => {
    fetchProductBySlug(slug);
  }, [fetchProductBySlug, slug]);

  return (
    prod && (
      <section id="product" className="py-5">
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
              <div class="row my-3">
                <div class="col">
                  <p>
                    <span className="fw-bold">Botanical Name: </span>
                    {prod.botanical_name}
                  </p>
                </div>
              </div>
              <div class="row my-3">
                <div class="col">
                  <p>
                    <span className="fw-bold">Seeds Per Packet: </span>
                    {prod.seeds_per_packet}
                  </p>
                </div>
                <div class="col">
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
              <div class="row my-3">
                <div class="col">
                  <p>
                    <span className="fw-bold">Sun: </span>
                    {prod.seeds_per_packet}
                  </p>
                </div>
                <div class="col">
                  <p>
                    <span className="fw-bold">Fruit Color: </span>
                    {prod.seeds_per_packet}
                  </p>
                </div>
              </div>
              <div className="small mb-1 text-capitalize text-muted">
                Quantity
              </div>

              <div className="d-flex">
                <input
                  className="form-control text-center me-3 w-auto"
                  id="inputQuantity"
                  type="num"
                  value={productCount}
                  onChange={(e) => setProductCount(e.target.value)}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="fa fa-shopping-cart me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

const mapStateToProps = ({ prod }) => {
  return { prod };
};

export default connect(mapStateToProps, actions)(Product);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

import ProductGrid from "./ProductGrid";

const renderPageNotFound = () => {
  return (
    <section id="shop" className="p-5">
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

const Shop = ({ fetchProducts, prod }) => {
  const category = useParams().category || "";

  useEffect(() => {
    fetchProducts(category);
  }, [fetchProducts, category]);

  if (!prod) {
    return <div className="text-center py-5"> Loading... </div>;
  }

  if (prod.length === 0) {
    return renderPageNotFound();
  }

  return (
    <section id="shop">
      <header
        className={`masthead text-center text-white ${category || "allSeed"}`}
      >
        <div className="masthead-content">
          <div className="container px-5">
            <h1 className="masthead-heading mb-0 text-capitalize">
              {category || "All Seed"}s.
            </h1>
          </div>
        </div>
      </header>
      {prod && <ProductGrid products={prod} />}
      {prod.length === 0 && <h1 className="text-center py-5">No Products</h1>}
    </section>
  );
};

const mapStateToProps = ({ prod }) => {
  return { prod };
};

export default connect(mapStateToProps, actions)(Shop);
